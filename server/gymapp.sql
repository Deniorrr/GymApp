-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2023 at 11:54 AM
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
(5, 2, 1),
(9, 2, 1),
(10, 2, 1),
(11, 2, 1),
(12, 2, 1),
(13, 2, 1),
(14, 2, 5),
(15, 2, 6),
(16, 3, 6),
(17, 2, 7),
(19, 2, 17),
(21, 2, 19),
(23, 2, 21),
(25, 2, 29),
(26, 2, 30),
(27, 4, 30),
(28, 3, 30),
(29, 2, 31),
(30, 4, 31),
(31, 3, 31),
(32, 2, 32),
(33, 3, 33),
(34, 3, 34),
(35, 3, 35),
(36, 4, 36),
(37, 4, 38),
(38, 3, 41),
(39, 3, 40),
(40, 3, 37),
(41, 2, 39),
(42, 4, 42),
(43, 4, 43),
(44, 3, 44),
(45, 3, 45),
(46, 3, 46),
(47, 3, 47),
(48, 3, 48),
(49, 3, 49),
(50, 3, 50),
(51, 3, 51),
(52, 3, 52),
(53, 3, 53),
(54, 3, 54),
(55, 3, 55),
(56, 3, 56),
(57, 3, 57),
(58, 3, 59),
(59, 2, 60),
(60, 3, 60),
(61, 4, 60),
(62, 5, 60),
(63, 2, 61),
(64, 3, 61),
(65, 4, 61),
(66, 5, 61);

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
(1, 5, 23, 31, 9),
(2, 5, 23, 31, 9),
(3, 5, 23, 31, 9),
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
(19, 25, 0, 0, 10),
(20, 26, 5, 4, 10),
(21, 26, 0, 0, 10),
(22, 26, 0, 0, 10),
(23, 27, 8, 10, 9.5),
(24, 27, 0, 0, 9.5),
(25, 27, 0, 0, 8.5),
(26, 27, 0, 0, 9),
(27, 28, 6, 7, 7),
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
(61, 36, 0, 0, 10),
(62, 37, 0, 0, 10),
(63, 40, 3, 4, 8.5),
(64, 39, 3, 4, 8.5),
(65, 38, 3, 4, 8.5),
(66, 40, 0, 0, 10),
(67, 38, 0, 0, 10),
(68, 41, 0, 0, 0),
(69, 39, 0, 0, 10),
(70, 38, 0, 0, 10),
(71, 40, 0, 0, 10),
(72, 39, 0, 0, 10),
(73, 40, 0, 0, 10),
(74, 38, 0, 0, 10),
(75, 39, 0, 0, 10),
(76, 38, 0, 0, 10),
(77, 40, 0, 0, 10),
(78, 39, 0, 0, 10),
(79, 38, 0, 0, 10),
(80, 40, 0, 0, 10),
(81, 39, 0, 0, 10),
(82, 38, 0, 0, 10),
(83, 40, 0, 0, 10),
(84, 39, 0, 0, 10),
(85, 38, 0, 0, 10),
(86, 40, 0, 0, 10),
(87, 39, 0, 0, 10),
(88, 42, 0, 0, 10),
(89, 43, 0, 0, 10),
(90, 44, 0, 0, 10),
(91, 44, 0, 0, 10),
(92, 45, 0, 0, 10),
(93, 45, 0, 0, 10),
(94, 46, 0, 0, 10),
(95, 47, 0, 0, 10),
(96, 48, 0, 0, 10),
(97, 49, 0, 0, 10),
(98, 50, 0, 0, 10),
(99, 51, 0, 0, 10),
(100, 52, 0, 0, 10),
(101, 53, 0, 0, 0),
(102, 54, 0, 0, 10),
(103, 55, 0, 0, 0),
(104, 56, 0, 0, 10),
(105, 57, 0, 0, 10),
(106, 58, 0, 0, 0),
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
(125, 63, 0, 0, 10),
(126, 63, 2, 3, 9),
(127, 63, 2, 7, 9),
(128, 64, 0, 0, 10),
(129, 64, 0, 0, 10),
(130, 64, 0, 0, 10),
(131, 64, 0, 0, 10),
(132, 65, 0, 0, 10),
(133, 65, 0, 0, 10),
(134, 65, 0, 0, 10),
(135, 65, 0, 0, 10),
(136, 65, 0, 0, 10),
(137, 66, 0, 0, 10),
(138, 66, 0, 0, 10),
(139, 66, 0, 0, 10),
(140, 66, 0, 0, 10),
(141, 66, 0, 0, 10),
(142, 66, 0, 0, 10);

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
(0, 'admin', 'admin@', 'admin'),
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
(1, 'wo1', 0, '2023-06-12 19:04:28'),
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
(29, 'Midday workout', 0, '2023-06-19 11:50:37'),
(30, 'GIGA WORKOUT', 49, '2023-06-19 11:53:01'),
(31, 'GIGA WORKOUT', 49, '2023-06-19 11:53:18'),
(32, 'Midday workout', 49, '2023-06-19 11:54:04'),
(33, 'Midday workout', 49, '2023-06-19 11:55:20'),
(34, 'Midday workout', 49, '2023-06-19 11:55:50'),
(35, 'Midday workout', 49, '2023-06-19 11:59:58'),
(36, 'XD', 49, '2023-06-19 12:00:38'),
(37, 'Midday workout', 0, '2023-06-19 12:01:50'),
(38, 'XD', 0, '2023-06-19 12:01:50'),
(39, 'Midday workout', 0, '2023-06-19 12:01:50'),
(40, 'Midday workout', 0, '2023-06-19 12:01:50'),
(41, 'Midday workout', 0, '2023-06-19 12:01:50'),
(42, 'XD', 0, '2023-06-19 12:02:44'),
(43, 'XD', 0, '2023-06-19 12:03:12'),
(44, 'Midday workout', 49, '2023-06-19 12:03:24'),
(45, 'Midday workout', 0, '2023-06-19 12:04:17'),
(46, 'Midday workout', 49, '2023-06-19 12:04:32'),
(47, 'Midday workout', 0, '2023-06-19 12:06:19'),
(48, 'Midday workout', 0, '2023-06-19 12:06:35'),
(49, 'zxczxczxzxczxc', 0, '2023-06-19 12:06:53'),
(50, 'zxczxczxzxczxc', 0, '2023-06-19 12:08:24'),
(51, 'zxczxczxzxczxc', 0, '2023-06-19 12:08:24'),
(52, 'zxczxczxzxczxc', 0, '2023-06-19 12:08:24'),
(53, 'zxczxczxzxczxc', 0, '2023-06-19 12:08:51'),
(54, 'Midday workout', 0, '2023-06-19 12:09:58'),
(55, 'zxczxczxzxczxc', 0, '2023-06-19 12:09:58'),
(56, 'zxczxczxzxczxc', 0, '2023-06-19 12:09:58'),
(57, 'zxczxczxzxczxc', 0, '2023-06-19 12:09:58'),
(59, 'zxczxczxzxczxc', 0, '2023-06-19 12:10:35'),
(60, 'GIGA TEŚCIOR', 0, '2023-06-19 15:11:30'),
(61, 'GIGA TEŚCIOR', 0, '2023-06-19 15:50:27');

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
(5, 'Biceps curl', 0);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `sets`
--
ALTER TABLE `sets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `workouts`
--
ALTER TABLE `workouts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `workout_exercises`
--
ALTER TABLE `workout_exercises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
