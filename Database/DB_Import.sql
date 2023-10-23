-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 23. Okt 2023 um 10:42
-- Server-Version: 10.4.28-MariaDB
-- PHP-Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `mt`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `connection`
--

CREATE TABLE `connection` (
  `ConnectionId` int(11) NOT NULL,
  `RouterA` int(11) NOT NULL,
  `RouterB` int(11) NOT NULL,
  `OSPF` tinyint(1) NOT NULL,
  `RIP` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `router`
--

CREATE TABLE `router` (
  `RouterId` int(11) NOT NULL,
  `IsActive` tinyint(1) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `ConnectionId` int(11) NOT NULL,
  `RoutingTableId` int(11) NOT NULL,
  `IP` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `routingtable`
--

CREATE TABLE `routingtable` (
  `RoutingTableId` int(11) NOT NULL,
  `Destination` varchar(45) NOT NULL,
  `Gateway` varchar(45) NOT NULL,
  `Networkmask` varchar(45) NOT NULL,
  `Interface` varchar(45) NOT NULL,
  `Metric` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `session`
--

CREATE TABLE `session` (
  `SessionId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `UserId` int(11) NOT NULL,
  `UserName` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `connection`
--
ALTER TABLE `connection`
  ADD PRIMARY KEY (`ConnectionId`);

--
-- Indizes für die Tabelle `router`
--
ALTER TABLE `router`
  ADD KEY `RoutingTable_Router_FK` (`RoutingTableId`),
  ADD KEY `ConnectionId` (`ConnectionId`) USING BTREE;

--
-- Indizes für die Tabelle `routingtable`
--
ALTER TABLE `routingtable`
  ADD PRIMARY KEY (`RoutingTableId`);

--
-- Indizes für die Tabelle `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`SessionId`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserId`);

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `connection`
--
ALTER TABLE `connection`
  ADD CONSTRAINT `connection_ibfk_1` FOREIGN KEY (`ConnectionId`) REFERENCES `router` (`ConnectionId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints der Tabelle `routingtable`
--
ALTER TABLE `routingtable`
  ADD CONSTRAINT `routingtable_ibfk_1` FOREIGN KEY (`RoutingTableId`) REFERENCES `router` (`RoutingTableId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
