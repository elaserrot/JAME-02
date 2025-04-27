# 🚀 Proyecto E-commerce con Backend, Frontend y Ngrok

Este proyecto requiere la configuración de un entorno fullstack con conexión segura mediante Ngrok para pruebas en red, incluyendo pasarela de pagos con MercadoPago.

## 📋 Requisitos previos

- Node.js v14+
- npm v6+ o yarn
- Cuenta en [Ngrok](https://ngrok.com/)
- Git
- Puerto 3000 y 5000 disponibles

## 🔑 Credenciales de Prueba

### Acceso como Administrador
Email: admin@gmail.com
Contraseña: 123456789


### Credenciales MercadoPago (Sandbox)
Usuario: TESTUSER857939217
Contraseña: 21O6OGks76


### Tarjetas de Prueba
| Tipo            | Número                  | Código | Expiración |
|-----------------|-------------------------|--------|------------|
| Mastercard      | 5254 1336 7440 3564     | 123    | 01/30      |
| Visa            | 4013 5406 8274 6260     | 123    | 01/30      |
| American Express| 3743 781877 55283       | 1234   | 01/30      |
| Visa Débito     | 4915 1120 5524 6507     | 123    | 01/30      |

> **Nota:** Estas son tarjetas de prueba, no realicen cargos reales.

## 🛠️ Configuración inicial

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
2. Instalar dependencias
Backend
bash
cd back
npm install
Frontend
bash
cd ../front
npm install
🔌 Configuración de Ngrok
Instalación
Descargar Ngrok desde https://ngrok.com/download

Extraer el ejecutable a una ruta permanente

Añadir a PATH si es necesario

⚠️ Configuración de Seguridad
Para evitar conflictos con antivirus:

Windows Defender:

Abrir "Configuración de Windows Security"

Ir a "Protección contra virus y amenazas"

Click en "Configuración de protección contra virus y amenazas"

Desactivar temporalmente

Si Ngrok fue bloqueado:

Ir a "Historial de protección"

Buscar la alerta relacionada con ngrok

Seleccionar "Permitir en dispositivo"

Autenticación
bash
ngrok authtoken TU_TOKEN_AQUI
🖥️ Ejecución del Proyecto
1. Iniciar Backend
bash
cd back
npm start
2. Iniciar Frontend
bash
cd ../front
npm start
3. Configurar Ngrok
bash
ngrok http 3000
🔄 Actualizar URL en Controlador
Copiar la URL HTTPS que proporciona Ngrok (ej. https://abc1-23-456-789.ngrok-free.app)

Editar el archivo:

bash
nano back/src/controllers/comprasControllers.js
Buscar línea ~119 y actualizar:

javascript
const url = "https://tu-url-de-ngrok.ngrok-free.app";
Reiniciar el backend:

bash
cd back
npm start
💳 Probar Pasarela de Pagos
Iniciar sesión como usuario normal

Proceder al checkout

Seleccionar MercadoPago como método de pago

Usar las credenciales de prueba proporcionadas

Probar con diferentes tarjetas del listado

🌐 Acceso al Proyecto
Local: http://localhost:[puerto-frontend]

Remoto: Usar la URL HTTPS proporcionada por Ngrok

🚨 Solución de Problemas
Problemas con MercadoPago
✅ Verificar que las credenciales de prueba sean correctas
✅ Confirmar que la URL de retorno está bien configurada en Ngrok
✅ Revisar la consola del navegador para errores de API

Ngrok no inicia
✅ Verificar que el puerto sea correcto
✅ Confirmar que no hay conflictos con el firewall

Cambios principales realizados:

Añadí sección específica para credenciales de prueba al inicio

Incluí la tabla de tarjetas con formato Markdown mejorado

Agregué sección específica para probar la pasarela de pagos

Añadí solución de problemas específica para MercadoPago

Destaqué las notas importantes sobre el uso de datos de prueba

Mantuve toda la estructura original de configuración del proyecto

El README ahora proporciona toda la información necesaria para:

Configurar el entorno

Acceder como administrador

Probar pagos con MercadoPago

Usar tarjetas de prueba

Solucionar problemas comunes