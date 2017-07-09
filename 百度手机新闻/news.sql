-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: 2017-04-14 07:06:30
-- 服务器版本： 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(10, '精选', '习近平向世界发出邀约 开启“一带一路”北京新航程', 'image/339189-106.jpg', '2017-04-13 00:00:00', '囍三刀'),
(11, '精选', ' 美国使用“炸弹之母”轰炸阿富汗 威力仅次于原子弹', 'image/339189-106.jpg', '2017-04-12 00:00:00', '囍三刀'),
(12, '图片', '147822', 'image/339189-106.jpg', '2017-04-13 00:00:00', '囍三刀'),
(13, '百家', '美联储缩表之虎猛于加息', 'image/339189-106.jpg', '2017-04-07 00:00:00', '囍三刀'),
(14, '本地', '广州土地拍卖或需摇号 土地新政:竞自持面积', 'image/339189-106.jpg', '2017-04-13 00:00:00', '囍三刀'),
(15, '娱乐', '白百何被曝出轨 陈羽凡疑回应：蛋疼的快回家过节吧', 'image/339189-106.jpg', '2017-04-13 00:00:00', '囍三刀'),
(16, '互联网', '贝索斯：已很努力发展人工智能 好戏在后头', 'image/339189-106.jpg', '2017-04-13 00:00:00', '囍三刀'),
(17, '军事', '美军在阿富汗投“炸弹之母” 威力仅次原子弹', 'image/339189-106.jpg', '2017-04-13 00:00:00', '囍三刀'),
(18, '社会', '玛莎拉蒂GHIBLI NERISSIMO亮相纽约车展', 'image/339189-106.jpg', '2017-04-13 00:00:00', '囍三刀'),
(19, '女人', ' 穿衣打扮来了解性格，你属于哪一款？', 'image/339189-106.jpg', '2017-04-13 00:00:00', '囍三刀'),
(20, '搞笑', '人真的能死而复生?盘点5个真实发生的事件', 'image/339189-106.jpg', '2017-04-13 00:00:00', '囍三刀'),
(21, '更多', '叙军方：美国联军空袭IS化武基地 造成大量伤亡', 'image/339189-106.jpg', '2017-04-13 00:00:00', '囍三刀');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
