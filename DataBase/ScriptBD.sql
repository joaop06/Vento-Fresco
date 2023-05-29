CREATE DATABASE ventofresco;
USE ventofresco;
/* user: ventofresco // password: ventofresco*/



CREATE TABLE `user` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(250) NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    `cell_phone` INT(10) DEFAULT NULL,
    `adress_id_fk` INT DEFAULT NULL,
    `cart` VARCHAR(100),
    CONSTRAINT `fk_adress_user`
	FOREIGN KEY (`adress_id_fk`) REFERENCES `adress_user` (`id`)
);
SELECT * FROM `user`;


CREATE TABLE `adress_user`(
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `address` VARCHAR(80),
    `neighborhood` VARCHAR(30),
    `city` VARCHAR(30),
    `state` VARCHAR(2),
    `number` INT(5)
);
SELECT * FROM `adress_user`;


