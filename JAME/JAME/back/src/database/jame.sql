-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-04-2025 a las 14:20:11
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

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
-- Estructura de tabla para la tabla `mascotas`
--

CREATE TABLE `mascotas` (
  `ID_Mascota` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `edad` int(11) NOT NULL,
  `raza` varchar(50) NOT NULL,
  `dueño` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mascotas`
--

INSERT INTO `mascotas` (`ID_Mascota`, `nombre`, `edad`, `raza`, `dueño`) VALUES
(1, 'keyla', 3, 'bulldog frances', 'alisson daniela'),
(2, 'napoleon', 2, 'Bulldog frances', 'juan jose');

CREATE TABLE `productos` (
   `id_producto` int(11) NOT NULL,
    `nombre_producto` varchar(255) NOT NULL,
   `descripcion` text DEFAULT NULL,
   `precio` decimal(10,2) DEFAULT NULL,
   `stock` int(11) DEFAULT NULL,
   `imagen` varchar(200) NOT NULL,
   `id_cate` int(11) DEFAULT NULL
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
 --
 -- Volcado de datos para la tabla `productos`
 --
CREATE TABLE `citas` (
  `ID_Citas` int(11) NOT NULL,
  `Usuario` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Motivo` varchar(50) NOT NULL,
  `Estado` varchar(50) NOT NULL,
  `Mascota` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`ID_Citas`, `Usuario`, `Fecha`, `Motivo`, `Estado`, `Mascota`) VALUES
(4, 2, '2025-04-09', 'Control de vacunas', 'Actualizada', 1),
(5, 1, '2025-05-25', 'especialista', 'pendiente', 5),
(6, 1, '2025-04-09', 'cepillado', 'activo', 1),
(7, 1, '2026-04-09', 'groming', 'pendiente', 1);

--
-- Volcado de datos para la tabla `roles`
--

CREATE TABLE roles (
    id_rol INT(11) NOT NULL AUTO_INCREMENT, 
    nombre_rol VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_rol)

    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

   TRUNCATE TABLE roles;

  INSERT INTO roles (nombre_rol) VALUES 
  ('Administrador'),
  ('Usuario')


CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `metodoPago` tinyint(1) NOT NULL COMMENT '0 = Efectivo, 1 = Tarjeta',
  `descripcion` varchar(100),
  PRIMARY KEY (`id_pedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `pedidos` (`id_usuario`, `fecha`, `metodoPago`, `descripcion`) VALUES
(1, '2023-10-03', 0, 'Pedido de productos de limpieza');

 CREATE TABLE `categorias` (
    `id_categoria` INT NOT NULL AUTO_INCREMENT,
    `nombre_categoria` VARCHAR(100) NOT NULL,
    `descripcion_categoria` VARCHAR(100),
    PRIMARY KEY (`id_categoria`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

