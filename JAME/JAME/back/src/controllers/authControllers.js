const mysql = require("mysql")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")

// Configuración de la base de datos
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "jame",
})


// Almacenamiento temporal de códigos (en producción, usa una tabla en la base de datos)
const codigosPendientes = {}

// Configuración del transporte de correo
const transporter = nodemailer.createTransport({
  service: "correo_electronico", // O el servicio que uses
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Controlador para enviar código de recuperación
exports.enviarCodigo = (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ success: false, message: "El correo electrónico es requerido" })
  }

  // Verificar si el usuario existe
  const query = "SELECT * FROM usuarios WHERE correo_electronico = ?"
  connection.query(query, [email], (error, results) => {
    if (error) {
      console.error("Error al buscar usuario:", error)
      return res.status(500).json({ success: false, message: "Error al procesar la solicitud" })
    }

    // Si no encontramos el usuario
    if (results.length === 0) {
      // Por seguridad, no revelamos si el correo existe o no
      return res.json({ success: true, message: "Si el correo existe, recibirás un código de recuperación." })
    }

    // Generar código aleatorio
    const codigo = Math.floor(100000 + Math.random() * 900000)

    // Guardar el código (con expiración de 15 minutos)
    codigosPendientes[email] = {
      codigo: codigo.toString(),
      expira: Date.now() + 15 * 60 * 1000,
      id_usuario: results[0].id_usuario, // Guardamos el ID para usarlo después
    }

    // Configurar el correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Código de recuperación de contraseña - Clínica Veterinaria Ciudad Canina",
      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2>Recuperación de Contraseña</h2>
    <p>Has solicitado restablecer tu contraseña para la Clínica Veterinaria Ciudad Canina.</p>
    <p>Tu código de verificación es: <strong style="font-size: 24px;">${codigo}</strong></p>
    <p>Este código expirará en 15 minutos.</p>
    <p>Si no solicitaste este cambio, puedes ignorar este correo.</p>
    <p>Saludos,<br>Equipo de Ciudad Canina</p>
  </div>
`,
    }

    // Enviar el correo
    transporter.sendMail(mailOptions, (emailError) => {
      if (emailError) {
        console.error("Error al enviar correo:", emailError)
        return res.status(500).json({ success: false, message: "Error al enviar el correo" })
      }

      res.json({ success: true, message: "Código enviado correctamente" })
    })
  })
}

// Controlador para verificar el código
exports.verificarCodigo = (req, res) => {
  const { email, codigo } = req.body

  // Verificar si hay un código pendiente para ese email
  if (!codigosPendientes[email]) {
    return res.json({ success: false, message: "No hay código pendiente o ha expirado" })
  }

  const codigoInfo = codigosPendientes[email]

  // Verificar si el código ha expirado
  if (Date.now() > codigoInfo.expira) {
    delete codigosPendientes[email]
    return res.json({ success: false, message: "El código ha expirado" })
  }

  // Verificar si el código es correcto
  if (codigoInfo.codigo !== codigo) {
    return res.json({ success: false, message: "Código incorrecto" })
  }

  // Código correcto, generar token temporal para cambio de contraseña
  // Usar JWT para generar un token seguro
  const token = jwt.sign(
    {
      id_usuario: codigoInfo.id_usuario,
      email: email,
      tipo: "reset_password",
    },
    process.env.JWT_SECRET || "clave_secreta_temporal",
    { expiresIn: "15m" }, // El token expira en 15 minutos
  )

  codigosPendientes[email].token = token

  res.json({ success: true, token })
}

// Controlador para cambiar la contraseña
exports.cambiarContrasena = (req, res) => {
  const { email, token, nuevaContrasena } = req.body

  // Verificar token
  if (!codigosPendientes[email] || codigosPendientes[email].token !== token) {
    return res.json({ success: false, message: "Token inválido o expirado" })
  }

  try {
    // Verificar el JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "clave_secreta_temporal")

    if (decoded.tipo !== "reset_password" || decoded.email !== email) {
      return res.json({ success: false, message: "Token inválido" })
    }

    // Hashear la nueva contraseña
    bcrypt.hash(nuevaContrasena, 10, (hashError, hashedPassword) => {
      if (hashError) {
        console.error("Error al hashear contraseña:", hashError)
        return res.status(500).json({ success: false, message: "Error al procesar la solicitud" })
      }

      // Actualizar contraseña en la base de datos
      const query = "UPDATE usuarios SET contraseña = ? WHERE id_usuario = ?"
      connection.query(query, [hashedPassword, decoded.id_usuario], (updateError, results) => {
        if (updateError) {
          console.error("Error al actualizar contraseña:", updateError)
          return res.status(500).json({ success: false, message: "Error al actualizar la contraseña" })
        }

        // Eliminar código pendiente
        delete codigosPendientes[email]

        res.json({ success: true, message: "Contraseña actualizada correctamente" })
      })
    })
  } catch (error) {
    console.error("Error al verificar token:", error)
    res.status(401).json({ success: false, message: "Token inválido o expirado" })
  }
}
