-- SQLBook: Code
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-04-2025 a las 15:59:00
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
-- Estructura de tabla para la tabla `carrito compras`
--

CREATE TABLE `carrito compras` (
  `ID_CarritoCompras` int(100) NOT NULL,
  `ID_Venta` int(100) NOT NULL,
  `id_producto` int(100) NOT NULL,
  `Cantidad_CarritoCompras` int(100) NOT NULL,
  `PrecioUnitario_CarritoCompras` decimal(60,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_cate` int(100) NOT NULL,
  `nombre_Categoria` varchar(100) NOT NULL,
  `Descripción_Categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `ID_Compra` int(100) NOT NULL,
  `Fecha_Compra` date NOT NULL,
  `Cantidad_Compra` int(100) NOT NULL,
  `Descripción_Compra` text NOT NULL,
  `MetodoPago_Compra` tinyint(1) NOT NULL,
  `NumeroFactura_Compra` int(100) NOT NULL,
  `PrecioUni_Compra` decimal(15,0) NOT NULL,
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

--
-- Volcado de datos para la tabla `detalle_pedidos`
--

INSERT INTO `detalle_pedidos` (`id_detalle`, `id_pedido`, `producto`, `cantidad`, `subtotal`) VALUES
(1, 1, 'Base de maquillaje', 1, 30000.00),
(2, 1, 'Máscara de pestañas', 2, 19000.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascota`
--

CREATE TABLE `mascota` (
  `ID_Mascota` int(11) NOT NULL,
  `Nombre_Mascota` varchar(50) NOT NULL,
  `Edad_Mascota` int(15) NOT NULL,
  `Facha_nacimiento` date NOT NULL,
  `Raza_Mascota` varchar(50) NOT NULL,
  `ID_Usuario` int(11) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(1, 1, '2023-10-03', 0, '');

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
(1, 'Comida de perros', 'comida de perros', 19000, 50, 'PRODUCTOS_FOTOS/1.jpg', NULL),
(2, 'Comida de perros', 'KIT Agronotas Pedigree Snacks Dentastix barra de 15.7 g', 26000, 20, 'PRODUCTOS_FOTOS/2.jpg', NULL),
(3, 'Comida para perro', 'Agility Gold Grandes Adultos 15 Kg para perros de Razas Grandes - Sin Granos', 130000, 40, 'PRODUCTOS_FOTOS/3.jpg', NULL),
(4, 'Comida para perro', 'Hills Perros Adultos de Razas Grandes Cordero 33 Lb', 190000, 20, 'PRODUCTOS_FOTOS/4.jpg', NULL),
(5, 'Comida para perro', 'Agility Gold Grandes Adultos 15 Kg para perros de Razas Grandes - Sin Granos', 130000, 70, 'PRODUCTOS_FOTOS/5.jpg', NULL),
(6, 'Medicina para perro', 'NexGard Antipulgas para Perros de 10.1 a 25 Kg', 49000, 30, 'PRODUCTOS_FOTOS/6.jpg', NULL),
(7, 'Comida para perro', 'BR for DOG Snacks Premium Bombonera para perros Softy Mix 500g', 8000, 15, 'PRODUCTOS_FOTOS/7.jpg', NULL),
(8, 'Juguetes para gatos', 'Juguete Trixie para gato Erizo Bola de 3 cm 4125', 10000, 50, 'PRODUCTOS_FOTOS/8.jpg', NULL),
(9, 'Aseo para perro', 'Dispensador de Bolsas Repuestos', 9000, 30, 'PRODUCTOS_FOTOS/9.jpg', NULL),
(10, 'Juguetes para perros', 'Hueso Carnaza Natural 13-14\" 8813C', 23000, 25, 'PRODUCTOS_FOTOS/10.jpg', NULL),
(11, 'Ropa para perro', 'Saco Térmico Color Fucsia Talla XXL ', 35000, 57, 'PRODUCTOS_FOTOS/11.jpg', NULL),
(12, 'Comida para perro', 'Hills Science Plan Perros Cachorros Desarrollo Saludable 4.5 Lb', 83000, 10, 'PRODUCTOS_FOTOS/12.jpg', NULL),
(13, 'Aseo para gatos', 'Arenera Bandeja Con Borde XL Azul Oscur', 28000, 15, 'PRODUCTOS_FOTOS/13.jpg', NULL),
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
  `fecha_registro` datetime NOT NULL,
  `id_rol` int(11) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_completo`, `correo_electronico`, `usuario`, `contraseña`, `direccion`, `telefono`, `imagen`, `fecha_registro`, `id_rol`) VALUES
(1, 'Juan José Uparela Sosa', 'uparelajuan2@gmail.com', 'juanjo', '1111', '94 B 130a-67', 3138332309, 'USUARIOS_FOTOS/1.jpg', '2024-10-08 19:33:21', 1),
(2, 'Diego esteban sanchez', 'diego@gmail.com', 'Diego', '1111', 'kenedy', 3209207777, 'USUARIOS_FOTOS/2.jpg', '2024-09-07 20:59:42', 2),
(3, 'Alisson', 'alison@gmail.com', 'Alisson', '1111', 'Dirección', 3109999999, 'USUARIOS_FOTOS/3.jpg', '2024-10-03 19:33:21', 1),
(4, 'martin', 'misterlee272006@gmail.com', 'martinlee', '$2y$10$PdVFzzhsC.EUo8C/V5F.h.SODYF9e2fCLveDcOiKxn1/.AefPSdm6', NULL, NULL, 'USUARIOS_FOTOS/nf.jpg', '2024-09-29 22:53:38', 1),
(5, 'Martin Lee Moya Llano ', 'misterlee272006@gmail.com', 'lee', '$2b$10$GxLv4KzNDuKi7W6AWibV/.H0vynm.9uCqV5X2WG/M1mY5algdHUVa', NULL, NULL, 'USUARIOS_FOTOS/nf.jpg', '0000-00-00 00:00:00', 2),
(6, 'Martin Lee Moya Llano ', 'misterlee272006@gmail.com', 'leetosky', '$2b$10$OcPis7W/rDNOGXEIseeGhuTCvvqt/8/e03QAQPx82xanvQLLtZxxK', NULL, NULL, 'USUARIOS_FOTOS/nf.jpg', '0000-00-00 00:00:00', 2),
(7, 'JuanJo', 'uparelajuan2@gmail.com', 'jj', '$2b$10$Mgg58VT6B.pWprsg14xJ9Oswc7xS.Y2jo6KL/81vSLO9SMQvno36G', NULL, NULL, 'USUARIOS_FOTOS/nf.jpg', '0000-00-00 00:00:00', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `ID_Venta` int(11) NOT NULL,
  `ID_Usuario` int(11) NOT NULL,
  `Fecha_Venta` datetime NOT NULL,
  `MetodoPago_Venta` varchar(25) NOT NULL,
  `Monto_Venta` varchar(28) NOT NULL,
  `id_producto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito compras`
--
ALTER TABLE `carrito compras`
  ADD PRIMARY KEY (`ID_CarritoCompras`),
  ADD UNIQUE KEY `ID_Venta` (`ID_Venta`),
  ADD UNIQUE KEY `ID_Producto` (`id_producto`),
  ADD UNIQUE KEY `id_producto_2` (`id_producto`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
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
  ADD PRIMARY KEY (`ID_Mascota`),
  ADD UNIQUE KEY `ID_Usuario` (`ID_Usuario`);

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
  ADD PRIMARY KEY (`id_producto`),
  ADD UNIQUE KEY `id_cate` (`id_cate`);

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
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`ID_Venta`),
  ADD UNIQUE KEY `id_productos` (`id_producto`),
  ADD UNIQUE KEY `id_producto` (`id_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito compras`
--
ALTER TABLE `carrito compras`
  MODIFY `ID_CarritoCompras` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_cate` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `ID_Citas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `ID_Compra` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalle_pedidos`
--
ALTER TABLE `detalle_pedidos`
  MODIFY `id_detalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `mascota`
--
ALTER TABLE `mascota`
  MODIFY `ID_Mascota` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `ID_Venta` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

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
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_id_rol` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `venta_ibfk_1` FOREIGN KEY (`ID_Venta`) REFERENCES `carrito compras` (`ID_CarritoCompras`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
