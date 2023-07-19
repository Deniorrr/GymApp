-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 10, 2023 at 09:10 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gymapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `exercises`
--

CREATE TABLE `exercises` (
  `id` int(11) NOT NULL,
  `workout_exercise_id` int(11) DEFAULT NULL,
  `workout_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exercises`
--

INSERT INTO `exercises` (`id`, `workout_exercise_id`, `workout_id`) VALUES
(14, 2, 5),
(15, 2, 6),
(16, 3, 6),
(17, 2, 7),
(19, 2, 17),
(21, 2, 19),
(23, 2, 21),
(29, 2, 31),
(30, 4, 31),
(31, 3, 31),
(32, 2, 32),
(33, 3, 33),
(34, 3, 34),
(35, 3, 35),
(38, 3, 41),
(39, 3, 40),
(41, 2, 39),
(45, 3, 45),
(48, 3, 48),
(49, 3, 49),
(51, 3, 51),
(52, 3, 52),
(53, 3, 53),
(55, 3, 55),
(56, 3, 56),
(59, 2, 60),
(60, 3, 60),
(61, 4, 60),
(62, 5, 60),
(67, 7, 62),
(68, 2, 63),
(69, 2, 64),
(70, 7, 64);

-- --------------------------------------------------------

--
-- Table structure for table `sets`
--

CREATE TABLE `sets` (
  `id` int(11) NOT NULL,
  `exercise_id` int(11) DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `reps` int(11) DEFAULT NULL,
  `rpe` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sets`
--

INSERT INTO `sets` (`id`, `exercise_id`, `weight`, `reps`, `rpe`) VALUES
(4, 14, 0, 0, 10),
(5, 15, 0, 0, 10),
(6, 15, 0, 0, 10),
(7, 15, 0, 0, 10),
(8, 16, 0, 0, 10),
(9, 16, 0, 0, 10),
(10, 16, 0, 0, 10),
(11, 17, 0, 0, 10),
(13, 19, 0, 0, 10),
(15, 21, 0, 0, 10),
(17, 23, 0, 0, 10),
(28, 29, 5, 4, 10),
(29, 29, 0, 0, 10),
(30, 29, 0, 0, 10),
(31, 30, 8, 10, 9.5),
(32, 30, 0, 0, 9.5),
(33, 30, 0, 0, 8.5),
(34, 30, 0, 0, 9),
(35, 31, 6, 7, 0),
(36, 32, 0, 0, 0),
(37, 33, 3, 4, 8.5),
(38, 33, 0, 0, 10),
(39, 33, 0, 0, 10),
(40, 33, 0, 0, 10),
(41, 33, 0, 0, 10),
(42, 33, 0, 0, 10),
(43, 33, 0, 0, 10),
(44, 33, 0, 0, 10),
(45, 34, 3, 4, 8.5),
(46, 34, 0, 0, 10),
(47, 34, 0, 0, 10),
(48, 34, 0, 0, 10),
(49, 34, 0, 0, 10),
(50, 34, 0, 0, 10),
(51, 34, 0, 0, 10),
(52, 34, 0, 0, 10),
(53, 35, 3, 4, 8.5),
(54, 35, 0, 0, 10),
(55, 35, 0, 0, 10),
(56, 35, 0, 0, 10),
(57, 35, 0, 0, 10),
(58, 35, 0, 0, 10),
(59, 35, 0, 0, 10),
(60, 35, 0, 0, 10),
(64, 39, 3, 4, 8.5),
(65, 38, 3, 4, 8.5),
(67, 38, 0, 0, 10),
(68, 41, 0, 0, 0),
(69, 39, 0, 0, 10),
(70, 38, 0, 0, 10),
(72, 39, 0, 0, 10),
(74, 38, 0, 0, 10),
(75, 39, 0, 0, 10),
(76, 38, 0, 0, 10),
(78, 39, 0, 0, 10),
(79, 38, 0, 0, 10),
(81, 39, 0, 0, 10),
(82, 38, 0, 0, 10),
(84, 39, 0, 0, 10),
(85, 38, 0, 0, 10),
(87, 39, 0, 0, 10),
(92, 45, 0, 0, 10),
(93, 45, 0, 0, 10),
(96, 48, 0, 0, 10),
(97, 49, 0, 0, 10),
(99, 51, 0, 0, 10),
(100, 52, 0, 0, 10),
(101, 53, 0, 0, 0),
(103, 55, 0, 0, 0),
(104, 56, 0, 0, 10),
(107, 59, 0, 0, 10),
(108, 59, 2, 3, 9),
(109, 59, 2, 7, 9),
(110, 60, 0, 0, 10),
(111, 60, 0, 0, 10),
(112, 60, 0, 0, 10),
(113, 60, 0, 0, 10),
(114, 61, 0, 0, 10),
(115, 61, 0, 0, 10),
(116, 61, 0, 0, 10),
(117, 61, 0, 0, 10),
(118, 61, 0, 0, 10),
(119, 62, 0, 0, 10),
(120, 62, 0, 0, 10),
(121, 62, 0, 0, 10),
(122, 62, 0, 0, 10),
(123, 62, 0, 0, 10),
(124, 62, 0, 0, 10),
(143, 67, 0, 0, 10),
(144, 68, 0, 0, 10),
(145, 69, 90, 8, 9),
(146, 69, 90, 8, 9),
(147, 69, 90, 8, 8.5),
(148, 69, 90, 6, 8),
(149, 70, 15, 8, 9),
(150, 70, 15, 8, 9),
(151, 70, 15, 8, 10);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(0, 'admin', 'admin@', '$2b$10$kVe3xmOI5kM5TEa1TBNNw.y5aQWFTlj7rwMuiyTNe84a6pRTtikVS'),
(48, '234', '234@', '$2b$10$76tnoxvqoO7gddl/yfv7f.xsFTK0k0OKIJBobv5XcF122521qSWLK'),
(49, 'qwe', 'qwe@', '$2b$10$tgXMVdeB7ZjQtukovqgm.O649rYlT1Ra97Mym6Pb4dxZy.FHnyCIy'),
(50, 'asd', 'asd@', '$2b$10$pd6wL/SHQscJPTPNPkLxQ.jFNP2MkMGRRSyuj13ovZqNrErWP/kTq');

-- --------------------------------------------------------

--
-- Table structure for table `workouts`
--

CREATE TABLE `workouts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `workout_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `workouts`
--

INSERT INTO `workouts` (`id`, `name`, `user_id`, `workout_date`) VALUES
(2, 'wo1', 0, '2023-06-12 19:04:56'),
(3, 'wo1', 0, '2023-06-12 19:04:56'),
(4, 'XD', 0, '2023-06-13 19:09:13'),
(5, 'Midday workout', 49, '2023-06-14 16:01:31'),
(6, 'Midday workout', 49, '2023-06-17 15:31:00'),
(7, 'Midday workout', 49, '2023-06-17 15:32:45'),
(9, 'Midday workout', 49, '2023-06-17 15:38:44'),
(10, 'Midday workout', 49, '2023-06-17 15:42:07'),
(11, 'XD', 49, '2023-06-17 16:45:18'),
(12, 'XD', 49, '2023-06-17 16:56:26'),
(13, 'XD', 49, '2023-06-17 16:59:33'),
(14, 'XD', 49, '2023-06-17 16:59:36'),
(15, 'XD', 49, '2023-06-17 16:59:38'),
(17, 'workoutName', 49, '2023-06-19 11:41:42'),
(19, 'Midday workout', 49, '2023-06-19 11:43:03'),
(21, 'Midday workout', 49, '2023-06-19 11:44:38'),
(23, 'XD', 49, '2023-06-19 11:46:12'),
(24, 'Midday workout', 49, '2023-06-19 11:47:26'),
(26, 'Midday workout', 0, '2023-06-19 11:48:14'),
(27, 'Midday workout', 0, '2023-06-19 11:49:07'),
(28, 'Midday workout', 0, '2023-06-19 11:49:18'),
(31, 'GIGA WORKOUT', 49, '2023-06-19 11:53:18'),
(32, 'Midday workout', 49, '2023-06-19 11:54:04'),
(33, 'Midday workout', 49, '2023-06-19 11:55:20'),
(34, 'Midday workout', 49, '2023-06-19 11:55:50'),
(35, 'Midday workout', 49, '2023-06-19 11:59:58'),
(39, 'Midday workout', 0, '2023-06-19 12:01:50'),
(40, 'Midday workout', 0, '2023-06-19 12:01:50'),
(41, 'Midday workout', 0, '2023-06-19 12:01:50'),
(45, 'Midday workout', 0, '2023-06-19 12:04:17'),
(48, 'Midday workout', 0, '2023-06-19 12:06:35'),
(49, 'zxczxczxzxczxc', 0, '2023-06-19 12:06:53'),
(51, 'zxczxczxzxczxc', 0, '2023-06-19 12:08:24'),
(52, 'zxczxczxzxczxc', 0, '2023-06-19 12:08:24'),
(53, 'zxczxczxzxczxc', 0, '2023-06-19 12:08:51'),
(55, 'zxczxczxzxczxc', 0, '2023-06-19 12:09:58'),
(56, 'zxczxczxzxczxc', 0, '2023-06-19 12:09:58'),
(60, 'GIGA TEŚCIOR', 0, '2023-06-19 15:11:30'),
(62, 'Midday workout', 49, '2023-06-22 12:36:28'),
(63, 'Midday workout', 49, '2023-06-23 01:51:20'),
(64, 'Example workout', 49, '2023-06-23 02:09:25');

-- --------------------------------------------------------

--
-- Table structure for table `workout_exercises`
--

CREATE TABLE `workout_exercises` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `workout_exercises`
--

INSERT INTO `workout_exercises` (`id`, `name`, `user_id`) VALUES
(2, 'Bench Press', 0),
(3, 'Pull Up', 0),
(4, 'Push Up', 0),
(5, 'Biceps curl', 0),
(6, 'XD', 50),
(7, 'Lateral Raise', 49),
(8, 'Triceps', 49);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `exercises`
--
ALTER TABLE `exercises`
  ADD PRIMARY KEY (`id`),
  ADD KEY `workout_exercise_id` (`workout_exercise_id`),
  ADD KEY `workout_id` (`workout_id`);

--
-- Indexes for table `sets`
--
ALTER TABLE `sets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `exercise_id` (`exercise_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workouts`
--
ALTER TABLE `workouts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `workout_exercises`
--
ALTER TABLE `workout_exercises`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `exercises`
--
ALTER TABLE `exercises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `sets`
--
ALTER TABLE `sets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `workouts`
--
ALTER TABLE `workouts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `workout_exercises`
--
ALTER TABLE `workout_exercises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `exercises`
--
ALTER TABLE `exercises`
  ADD CONSTRAINT `exercises_ibfk_1` FOREIGN KEY (`workout_exercise_id`) REFERENCES `workout_exercises` (`id`),
  ADD CONSTRAINT `exercises_ibfk_2` FOREIGN KEY (`workout_id`) REFERENCES `workouts` (`id`);

--
-- Constraints for table `sets`
--
ALTER TABLE `sets`
  ADD CONSTRAINT `sets_ibfk_1` FOREIGN KEY (`exercise_id`) REFERENCES `exercises` (`id`);

--
-- Constraints for table `workouts`
--
ALTER TABLE `workouts`
  ADD CONSTRAINT `workouts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `workout_exercises`
--
ALTER TABLE `workout_exercises`
  ADD CONSTRAINT `workout_exercises_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
