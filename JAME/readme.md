# 🐾 JAME - Sistema Veterinario

Este proyecto requiere la configuración de un entorno fullstack con conexión segura mediante Ngrok para pruebas en red, incluyendo pasarela de pagos con MercadoPago y base de datos MySQL.

## 📋 Requisitos previos

- Node.js v14+
- npm v6+ o yarn
- MySQL instalado y corriendo
- Cuenta en [Ngrok](https://ngrok.com/)
- Git
- Puertos 3001 y 5173 disponibles

## 🗄️ Base de Datos

La base de datos debe llamarse **jame**.

El script de creación y carga inicial se encuentra en:

```
back/src/config/jame.sql
```

Pasos rápidos:

1. Crear base de datos:
```sql
CREATE DATABASE jame;
```
2. Importar el archivo `jame.sql` en tu gestor de base de datos (por ejemplo, con MySQL Workbench o consola).

---

## 🔑 Credenciales de Prueba

### Acceso como Administrador
- Email: **admin@gmail.com**
- Contraseña: **123456789**

### Credenciales MercadoPago (Sandbox)
- Usuario: **TESTUSER857939217**
- Contraseña: **21O6OGks76**

### Tarjetas de Prueba
| Tipo             | Número                   | Código | Expiración |
|------------------|---------------------------|--------|------------|
| Mastercard       | 5254 1336 7440 3564        | 123    | 01/30      |
| Visa             | 4013 5406 8274 6260        | 123    | 01/30      |
| American Express | 3743 781877 55283          | 1234   | 01/30      |
| Visa Débito      | 4915 1120 5524 6507        | 123    | 01/30      |

> **Nota:** Estas son tarjetas de prueba, no realicen cargos reales.

---

## 🛠️ Configuración inicial

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### 2. Instalar dependencias
Backend:
```bash
cd back
npm install
```
Frontend:
```bash
cd ../front
npm install
```

### 3. Configurar la Base de Datos
- Asegúrate de tener MySQL corriendo.
- Crear la base de datos **jame** e importar el script `back/src/config/jame.sql`.

---

### 🔌 Configuración de Ngrok

Instalación:
- Descargar desde [Ngrok](https://ngrok.com/download)
- Extraer el ejecutable
- (Opcional) Añadir a PATH

⚠️ **Configuración de Seguridad (Windows Defender)**
- Ir a "Configuración de Seguridad de Windows"
- "Protección contra virus y amenazas" → "Configuración de protección contra virus" → Desactivar temporalmente
- Si bloquea Ngrok: ir a "Historial de Protección" y permitir el ejecutable.

Autenticación:
```bash
ngrok authtoken TU_TOKEN_AQUI
```

---

## 🖥️ Ejecución del Proyecto

1. Iniciar Backend:
```bash
cd back
npm start
```
2. Iniciar Frontend:
```bash
cd ../front
npm start
```
3. Iniciar Ngrok:
```bash
ngrok http 5173
```

---

## 🔄 Actualizar URL en Controlador de Compras

1. Copiar la URL HTTPS de Ngrok (por ejemplo, `https://abc1-23-456-789.ngrok-free.app`).
2. Editar:

```bash
nano back/src/controllers/comprasControllers.js
```
Buscar alrededor de la línea **119** y actualizar:

```javascript
const url = "https://tu-url-de-ngrok.ngrok-free.app";
```
3. Reiniciar el backend:
```bash
cd back
npm start
```

---

## 💳 Probar Pasarela de Pagos

- Iniciar sesión como usuario normal.
- Proceder al checkout.
- Seleccionar MercadoPago.
- Utilizar las tarjetas de prueba listadas.

---

## 🌐 Acceso al Proyecto

- Local: `http://localhost:[puerto-frontend]`
- Remoto (Ngrok): URL HTTPS proporcionada por Ngrok

---

## 🚨 Solución de Problemas

### Problemas con MercadoPago
✅ Verificar que las credenciales sean correctas  
✅ Confirmar que la URL de retorno esté bien configurada  
✅ Revisar la consola del navegador para errores de API

### Ngrok no inicia
✅ Verificar el puerto  
✅ Confirmar que no haya bloqueo del firewall  

### Base de Datos
✅ Asegurarse que la base de datos se llame exactamente `jame`  
✅ Confirmar que el script `jame.sql` fue importado correctamente  
✅ Verificar conexión en el archivo de configuración del backend si es necesario
