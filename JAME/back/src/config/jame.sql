-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-04-2025 a las 23:42:31
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `jame`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito_compras`
--

CREATE TABLE `carrito_compras` (
  `ID_CarritoCompras` int(100) NOT NULL,
  `id_producto` int(100) NOT NULL,
  `cantidad` int(100) NOT NULL,
  `id_usuario` int(255) NOT NULL,
  `carrito_estado` int(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrito_compras`
--

INSERT INTO `carrito_compras` (`ID_CarritoCompras`, `id_producto`, `cantidad`, `id_usuario`, `carrito_estado`) VALUES
(9, 29, 2, 8, 1),
(10, 26, 1, 8, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_cate` int(100) NOT NULL,
  `nombre_Categoria` varchar(100) NOT NULL,
  `Descripción_Categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_cate`, `nombre_Categoria`, `Descripción_Categoria`) VALUES
(1, 'Humedo', 'Productos humedos'),
(2, 'Medicina', 'Medicina para tu mascota');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `ID_Citas` int(11) NOT NULL,
  `ID_Usuario` int(11) NOT NULL,
  `Fecha_Cita` datetime DEFAULT NULL,
  `Motivo_Cita` varchar(50) NOT NULL,
  `Estado_Cita` varchar(50) NOT NULL,
  `ID_Mascota` int(11) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`ID_Citas`, `ID_Usuario`, `Fecha_Cita`, `Motivo_Cita`, `Estado_Cita`, `ID_Mascota`) VALUES
(1, 8, '2025-04-03 17:38:42', 'asgdawg', 'activa', 1),
(2, 8, '2025-04-03 00:00:00', 'Niidea', 'pendiente', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `ID_Compra` int(100) NOT NULL,
  `Fecha_Compra` date NOT NULL,
  `NumeroFactura_Compra` int(100) NOT NULL,
  `Precio_Total` decimal(15,0) NOT NULL,
  `ID_producto` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedidos`
--

CREATE TABLE `detalle_pedidos` (
  `id_detalle` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `producto` varchar(200) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascota`
--

CREATE TABLE `mascota` (
  `ID_Mascota` int(11) NOT NULL,
  `Nombre_Mascota` varchar(50) NOT NULL,
  `Edad_Mascota` int(15) NOT NULL,
  `Fecha_nacimiento` date NOT NULL,
  `Raza_Mascota` varchar(50) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `Observaciones_Mascota` varchar(255) NOT NULL DEFAULT 'No hay observaciones',
  `ID_Usuario` int(11) NOT NULL DEFAULT 2,
  `Estado_Mascota` int(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mascota`
--

INSERT INTO `mascota` (`ID_Mascota`, `Nombre_Mascota`, `Edad_Mascota`, `Fecha_nacimiento`, `Raza_Mascota`, `imagen`, `Observaciones_Mascota`, `ID_Usuario`, `Estado_Mascota`) VALUES
(1, 'Milu', 4, '2020-04-01', 'gato', '', '', 8, 1),
(3, 'Body', 4, '2020-11-10', 'gato', '', 'El gato se encuentra bien', 8, 1),
(7, 'Lucas3', 3, '2025-04-22', 'Gato', '', 'El gato se encuentra bien', 8, 0),
(8, 'Body2', 10, '2025-04-21', 'Gato', '', 'dwadaw', 8, 0),
(9, 'Body222', 23, '2025-04-23', 'Gato', '', 'dawf', 8, 0),
(10, 'Body numero 2', 3, '2025-04-15', 'Gato', '', 'a', 8, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `fecha_pedido` date NOT NULL,
  `MetodoPago_Pedido` tinyint(1) NOT NULL,
  `Descripcion_Pedido` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `id_usuario`, `fecha_pedido`, `MetodoPago_Pedido`, `Descripcion_Pedido`) VALUES
(1, 8, '2023-10-03', 0, 'pedido pedido pedido');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `stock` int(11) NOT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  `id_cate` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_producto`, `descripcion`, `precio`, `stock`, `imagen`, `id_cate`) VALUES
(1, 'Comida de perros', 'comida de perros', 19000, 50, 'PRODUCTOS_FOTOS/1.jpg', 1),
(2, 'Comida de perros', 'KIT Agronotas Pedigree Snacks Dentastix barra de 15.7 g', 26000, 20, 'PRODUCTOS_FOTOS/2.jpg', 1),
(3, 'Comida para perro', 'Agility Gold Grandes Adultos 15 Kg para perros de Razas Grandes - Sin Granos', 130000, 40, 'PRODUCTOS_FOTOS/3.jpg', 1),
(4, 'Comida para perro', 'Hills Perros Adultos de Razas Grandes Cordero 33 Lb', 190000, 20, 'PRODUCTOS_FOTOS/4.jpg', 1),
(5, 'Comida para perro', 'Agility Gold Grandes Adultos 15 Kg para perros de Razas Grandes - Sin Granos', 130000, 70, 'PRODUCTOS_FOTOS/5.jpg', 2),
(6, 'Medicina para perro', 'NexGard Antipulgas para Perros de 10.1 a 25 Kg', 49000, 30, 'PRODUCTOS_FOTOS/6.jpg', 2),
(7, 'Comida para perro', 'BR for DOG Snacks Premium Bombonera para perros Softy Mix 500g', 8000, 15, 'PRODUCTOS_FOTOS/7.jpg', NULL),
(8, 'Juguetes para gatos', 'Juguete Trixie para gato Erizo Bola de 3 cm 4125', 10000, 50, 'PRODUCTOS_FOTOS/8.jpg', NULL),
(9, 'Aseo para perro', 'Dispensador de Bolsas Repuestos', 9000, 30, 'PRODUCTOS_FOTOS/9.jpg', NULL),
(10, 'Juguetes para perros', 'Hueso Carnaza Natural 13-14\" 8813C', 23000, 25, 'PRODUCTOS_FOTOS/10.jpg', NULL),
(11, 'Ropa para perro', 'Saco Térmico Color Fucsia Talla XXL ', 35000, 57, 'PRODUCTOS_FOTOS/11.jpg', NULL),
(12, 'Comida para perro', 'Hills Science Plan Perros Cachorros Desarrollo Saludable 4.5 Lb', 83000, 10, 'PRODUCTOS_FOTOS/12.jpg', NULL),
(13, 'Aseo para gatos', 'Arenera Bandeja Con Borde XL Azul Oscur', 28000, 15, 'PRODUCTOS_FOTOS/13.jpg', 2),
(14, 'viaje para perro', 'Protector Forro Baul Carro 131', 120000, 40, 'PRODUCTOS_FOTOS/14.jpg', NULL),
(15, 'Aseo para perro', 'Cortaúñas tipo Guillotina para Perros', 18000, 25, 'PRODUCTOS_FOTOS/15.jpg', NULL),
(16, 'Comida para perro', 'Dog Chow Perros Adultos Sano y en Forma Light 8 Kg', 130000, 30, 'PRODUCTOS_FOTOS/16.jpg', NULL),
(17, 'Medicina para gato', 'Antiparasitario Drontal para gatos', 25000, 50, 'PRODUCTOS_FOTOS/17.jpg', NULL),
(18, 'Comida para gato', 'GI Balance x 60 Nuggtes', 22000, 35, 'PRODUCTOS_FOTOS/18.jpg', NULL),
(19, 'Aseo para perro', 'Comedero de Acero Inoxidable Anti hormigas de 0.6 L', 35000, 20, 'PRODUCTOS_FOTOS/19.jpg', NULL),
(20, 'Juguetes para gatos', 'Rascadera Trixie Talla XXL 64 cm de Largo x 37 cm de Ancho x 11 cm de Alto Gris Claro', 45000, 60, 'PRODUCTOS_FOTOS/20.jpg', NULL),
(21, 'Comida para gato', 'Naturalis para gatos Castrados Frango & Peru 1.5 Kg', 84000, 45, 'PRODUCTOS_FOTOS/21.jpg', NULL),
(22, 'Comida para gato', 'Concentrado Mirringo para gaticos por 0.5 KG', 25000, 10, 'PRODUCTOS_FOTOS/22.jpg', NULL),
(23, 'Juguetes para perros', 'Juguete Perro Bolos Pequeño 43061', 9000, 60, 'PRODUCTOS_FOTOS/23.jpg', NULL),
(24, 'viaje para perro', 'Arnés de Caminata Figgo Perro Talla L Negro', 110000, 40, 'PRODUCTOS_FOTOS/24.jpg', NULL),
(25, 'Comida para gato', 'Sportmix Cat Food Receta Original Concentrado para Gatos y Gatitos 6.8Kg', 90000, 20, 'PRODUCTOS_FOTOS/25.jpg', NULL),
(26, 'Aseo para perro', 'Cojín Gino Ovalado 105x75 cm Gris 3811', 48000, 15, 'PRODUCTOS_FOTOS/26.jpg', NULL),
(27, 'Ropa para perro', 'Placa Comedero Inteligente Wonderbowl 4400012384', 32000, 30, 'PRODUCTOS_FOTOS/27.jpg', NULL),
(28, 'Comida para perro', 'Chunky Perros Cachorros Pollo y Arroz 18 Kg', 80000, 25, 'PRODUCTOS_FOTOS/28.jpg', NULL),
(29, 'Aseo para perro', 'Ferplast Peine Antipulgas para gatos', 15000, 50, 'PRODUCTOS_FOTOS/29.jpg', NULL),
(30, 'comedero ', 'comedero redondo de madera de pinocho', 50000, 50, '', NULL),
(31, 'comedero ', 'comedero redondo de madera de pinocho', 50000, 50, '', NULL),
(32, 'comedero ', 'comedero redondo de madera de pinocho', 50000, 50, '', NULL),
(33, 'comedero ', 'comedero redondo de madera de pinocho', 50000, 50, '', NULL),
(34, 'comedero ', 'comedero redondo de madera de pinocho', 50000, 50, '', NULL),
(35, 'comedero ', 'comedero redondo de madera de pinocho', 50000, 50, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_rol`, `nombre_rol`) VALUES
(1, 'Administrador'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_completo` varchar(50) NOT NULL,
  `correo_electronico` varchar(100) NOT NULL,
  `usuario` varchar(30) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  `telefono` decimal(10,0) DEFAULT NULL,
  `imagen` varchar(30) NOT NULL DEFAULT 'USUARIOS_FOTOS/nf.jpg',
  `codigo` varchar(10) DEFAULT NULL,
  `codigo_expirate_date` datetime DEFAULT NULL,
  `fecha_registro` datetime NOT NULL,
  `id_rol` int(11) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_completo`, `correo_electronico`, `usuario`, `contraseña`, `direccion`, `telefono`, `imagen`, `codigo`, `codigo_expirate_date`, `fecha_registro`, `id_rol`) VALUES
(1, 'Juan José Uparela Sosa', 'uparelajuan2@gmail.com', 'juanjo', '1111', '94 B 130a-67', 3138332309, 'USUARIOS_FOTOS/1.jpg', NULL, NULL, '2024-10-08 19:33:21', 1),
(2, 'Diego esteban sanchez', 'diego@gmail.com', 'Diego', '1111', 'kenedy', 3209207777, 'USUARIOS_FOTOS/2.jpg', '', NULL, '2024-09-07 20:59:42', 2),
(3, 'Alisson', 'alison@gmail.com', 'Alisson', '1111', 'Dirección', 3109999999, 'USUARIOS_FOTOS/3.jpg', '', NULL, '2024-10-03 19:33:21', 1),
(4, 'martin', 'misterlee272006@gmail.com', 'martinlee', '$2y$10$PdVFzzhsC.EUo8C/V5F.h.SODYF9e2fCLveDcOiKxn1/.AefPSdm6', NULL, NULL, 'USUARIOS_FOTOS/nf.jpg', '', NULL, '2024-09-29 22:53:38', 1),
(5, 'Martin Lee Moya Llano ', 'misterlee272006@gmail.com', 'lee', '$2b$10$GxLv4KzNDuKi7W6AWibV/.H0vynm.9uCqV5X2WG/M1mY5algdHUVa', NULL, NULL, 'USUARIOS_FOTOS/nf.jpg', '', NULL, '0000-00-00 00:00:00', 2),
(6, 'Martin Lee Moya Llano ', 'misterlee272006@gmail.com', 'leetosky', '$2b$10$OcPis7W/rDNOGXEIseeGhuTCvvqt/8/e03QAQPx82xanvQLLtZxxK', NULL, NULL, 'USUARIOS_FOTOS/nf.jpg', '', NULL, '0000-00-00 00:00:00', 2),
(7, 'JuanJo', 'uparelajuan2@gmail.com', 'jj', '$2b$10$Mgg58VT6B.pWprsg14xJ9Oswc7xS.Y2jo6KL/81vSLO9SMQvno36G', NULL, NULL, 'USUARIOS_FOTOS/nf.jpg', '', NULL, '0000-00-00 00:00:00', 2),
(8, 'Dilan', 'dilanfantas@gmail.com', 'dilan', '$2b$10$yTxcruu7LKuV7mUr3bphTeH3SYL3/K8qqfhn.KPmdUrQOEoHY5eBa', 'san cristobal', 3138975212, 'USUARIOS_FOTOS/nf.jpg', NULL, NULL, '0000-00-00 00:00:00', 2),
(9, 'Admin', 'admin@gmail.com', 'Admin', '$2b$10$zbgPu3YYZ8I53Hm61s6KaepYek81lI6hdVsFQvjPZ7yWqerMxs6va', 'san cristobal', NULL, 'USUARIOS_FOTOS/nf.jpg', '', NULL, '0000-00-00 00:00:00', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito_compras`
--
ALTER TABLE `carrito_compras`
  ADD PRIMARY KEY (`ID_CarritoCompras`),
  ADD KEY `id usuario` (`id_usuario`),
  ADD KEY `producto` (`id_producto`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_cate`);

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`ID_Citas`),
  ADD UNIQUE KEY `ID_Usuario` (`ID_Usuario`,`ID_Mascota`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`ID_Compra`),
  ADD UNIQUE KEY `ID_producto` (`ID_producto`);

--
-- Indices de la tabla `detalle_pedidos`
--
ALTER TABLE `detalle_pedidos`
  ADD PRIMARY KEY (`id_detalle`),
  ADD KEY `fk_id_pedido` (`id_pedido`);

--
-- Indices de la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD PRIMARY KEY (`ID_Mascota`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `fk_id_usuario` (`id_usuario`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `fk_id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito_compras`
--
ALTER TABLE `carrito_compras`
  MODIFY `ID_CarritoCompras` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_cate` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `ID_Citas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `ID_Compra` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalle_pedidos`
--
ALTER TABLE `detalle_pedidos`
  MODIFY `id_detalle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mascota`
--
ALTER TABLE `mascota`
  MODIFY `ID_Mascota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito_compras`
--
ALTER TABLE `carrito_compras`
  ADD CONSTRAINT `id producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`),
  ADD CONSTRAINT `producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`);

--
-- Filtros para la tabla `detalle_pedidos`
--
ALTER TABLE `detalle_pedidos`
  ADD CONSTRAINT `fk_id_pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `fk_id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `categoria` FOREIGN KEY (`id_cate`) REFERENCES `categorias` (`id_cate`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_id_rol` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
