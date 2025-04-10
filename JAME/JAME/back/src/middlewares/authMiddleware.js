const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) return res.status(401).json({ error: "Token no proporcionado" });

    const token = authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: "Token no válido" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ error: "Token inválido o expirado" });

        req.user = decoded; // { id, correo, rol }
        next();
    });
};

const verificarRol = (rolPermitido) => {
    return (req, res, next) => {
        if (req.user.rol !== rolPermitido) {
            return res.status(403).json({ error: "Acceso denegado. No tienes permisos" });
        }
        next();
    };
};

module.exports = {
    verificarToken,
    verificarRol
};
