-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 17, 2017 at 09:02 AM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.0.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gameofthrones`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_characters`
--

CREATE TABLE `t_characters` (
  `id` tinyint(4) UNSIGNED NOT NULL,
  `firstname` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `lastname` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `age` tinyint(4) NOT NULL,
  `sex` enum('m','f') COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `t_characters`
--

INSERT INTO `t_characters` (`id`, `firstname`, `lastname`, `age`, `sex`) VALUES
(1, 'John', 'Snow', 15, 'm'),
(2, 'Cersei', 'Lannister', 40, 'f'),
(3, 'Sam', 'Tarly', 18, 'm'),
(4, 'Daenerys', 'Targaryen', 16, 'f'),
(5, 'Jaime', 'Lannister', 40, 'm'),
(6, 'Sansa', 'Stark', 14, 'f'),
(7, 'Thyrion', 'Lannister', 35, 'm'),
(8, 'Aria', 'Stark', 13, 'f'),
(9, 'Ned', 'Stark', 50, 'm'),
(10, 'Catelyn', 'Stark', 46, 'f'),
(11, 'Bran', 'Stark', 11, 'm'),
(12, 'Robb', 'Stark', 16, 'm'),
(22, 'Rickon', 'Stark', 8, 'm'),
(23, 'Dav', 'Col', 41, 'm');

-- --------------------------------------------------------

--
-- Table structure for table `t_cities`
--

CREATE TABLE `t_cities` (
  `id` tinyint(4) UNSIGNED NOT NULL,
  `city` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `continent` set('Westeros','Essos') COLLATE utf8mb4_bin NOT NULL,
  `allowSlavery` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `t_cities`
--

INSERT INTO `t_cities` (`id`, `city`, `continent`, `allowSlavery`) VALUES
(1, 'Braavos', 'Essos', 0),
(2, 'King\'s Landing', 'Westeros', 0),
(3, 'Meereen', 'Essos', 1);

-- --------------------------------------------------------

--
-- Table structure for table `t_livedin`
--

CREATE TABLE `t_livedin` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `id_character` tinyint(4) UNSIGNED NOT NULL,
  `id_city` tinyint(4) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `t_livedin`
--

INSERT INTO `t_livedin` (`id`, `id_character`, `id_city`) VALUES
(1, 4, 3),
(2, 2, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_characters`
--
ALTER TABLE `t_characters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t_cities`
--
ALTER TABLE `t_cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t_livedin`
--
ALTER TABLE `t_livedin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `C_FK1` (`id_character`),
  ADD KEY `C_FK2` (`id_city`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_characters`
--
ALTER TABLE `t_characters`
  MODIFY `id` tinyint(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `t_cities`
--
ALTER TABLE `t_cities`
  MODIFY `id` tinyint(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `t_livedin`
--
ALTER TABLE `t_livedin`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `t_livedin`
--
ALTER TABLE `t_livedin`
  ADD CONSTRAINT `C_FK1` FOREIGN KEY (`id_character`) REFERENCES `t_characters` (`id`),
  ADD CONSTRAINT `C_FK2` FOREIGN KEY (`id_city`) REFERENCES `t_cities` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
