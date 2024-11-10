-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 16, 2024 at 09:03 PM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vitavia`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `PRODUCTS`;

CREATE TABLE IF NOT EXISTS `PRODUCTS` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `PAGE` VARCHAR(150) DEFAULT NULL,
  `IMAGE` VARCHAR(150) DEFAULT NULL,
  `NAME` VARCHAR(150) DEFAULT 'home',
  `DESCRIPTION` TEXT,
  PRIMARY KEY (`ID`)
) ENGINE=INNODB AUTO_INCREMENT=19 DEFAULT CHARSET=UTF8MB4 COLLATE=UTF8MB4_0900_AI_CI;

--
-- Dumping data for table `products`
--

INSERT INTO `PRODUCTS` (
  `ID`,
  `PAGE`,
  `IMAGE`,
  `NAME`,
  `DESCRIPTION`
) VALUES (
  1,
  'home',
  '/images/products/1718867015101.jpeg',
  'home',
  NULL
),
(
  12,
  'about-us',
  '/images/products/image44.jpeg',
  'a propos de nous',
  NULL
),
(
  13,
  'contactez-nous',
  '/images/products/image55.jpeg',
  'contact',
  NULL
),
(
  18,
  'services',
  '/images/products/image56.jpeg',
  'services',
  NULL
);

DROP TABLE IF EXISTS `SERVICES`;

CREATE TABLE IF NOT EXISTS `SERVICES` (
  `ID_SERVICE` INT NOT NULL AUTO_INCREMENT,
  `PAGE` VARCHAR(150) DEFAULT NULL,
  `IMAGE` VARCHAR(150) DEFAULT NULL,
  `NAME` VARCHAR(150) DEFAULT 'home',
  `DESCRIPTION` TEXT,
  PRIMARY KEY (`ID`)
) ENGINE=INNODB AUTO_INCREMENT=19 DEFAULT CHARSET=UTF8MB4 COLLATE=UTF8MB4_0900_AI_CI;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;