-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 22, 2016 at 05:08 AM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `php_oop_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` mediumint(8) unsigned NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `DOB` date NOT NULL,
  `status` enum('active','inactive','banned','') NOT NULL,
  `username` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `first_name`, `last_name`, `DOB`, `status`, `username`) VALUES
(1, 'John', 'Jones', '1998-07-16', 'active', 'dudenator'),
(2, 'Cindy', 'Wilson', '2001-02-14', 'active', 'cupidsarrow'),
(3, 'Jason', 'Parks', '1995-12-04', 'inactive', 'forelornmonkey'),
(4, 'Simons', 'Perkins', '1992-04-28', 'active', 'cantstopwontstop'),
(5, 'Margene', 'Melrose', '1984-08-20', 'active', 'curmudgeonly'),
(6, 'Sandra', 'Kilroy', '1999-11-14', 'banned', 'sayhellotomylittlefriend');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;