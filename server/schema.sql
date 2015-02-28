CREATE DATABASE chat;

USE chat;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'user'
--
-- ---

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(140) NULL DEFAULT NULL,
  `roomid` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` VARCHAR(256) NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `userid` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'friends'
--
-- ---

DROP TABLE IF EXISTS `friends`;

CREATE TABLE `friends` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `userid` INTEGER(140) NULL DEFAULT NULL,
  `friendname` VARCHAR(140) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'roomname'
--
-- ---

DROP TABLE IF EXISTS `roomname`;

CREATE TABLE `roomname` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` VARCHAR(140) NULL DEFAULT NULL,
  `createdAt` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `user` ADD FOREIGN KEY (roomid) REFERENCES `roomname` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (userid) REFERENCES `user` (`id`);
ALTER TABLE `friends` ADD FOREIGN KEY (userid) REFERENCES `user` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `user` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `friends` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `roomname` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `user` (`id`,`username`,`roomid`) VALUES
-- ('','','');
-- INSERT INTO `messages` (`id`,`text`,`createdAt`,`userid`) VALUES
-- ('','','','');
-- INSERT INTO `friends` (`id`,`userid`,`friendname`) VALUES
-- ('','','');
-- INSERT INTO `roomname` (`id`,`roomname`,`createdAt`) VALUES
-- ('','','');




