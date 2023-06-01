CREATE DATABASE ventofresco;
USE ventofresco;
/* user: ventofresco // password: ventofresco*/



CREATE TABLE `client` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(250) NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    `cell_phone` INT(11) DEFAULT NULL,
    `adress_id_fk` INT DEFAULT NULL,
    `cart` VARCHAR(255) DEFAULT '',
    CONSTRAINT `adress_id_fk`
	FOREIGN KEY (`adress_id_fk`) REFERENCES `adress_client` (`id`)
);
SELECT * FROM `client`;
DROP TABLE `client`;



CREATE TABLE `adress_client`(
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `address` VARCHAR(80) DEFAULT '',
    `neighborhood` VARCHAR(30) DEFAULT '',
    `city` VARCHAR(30) DEFAULT '',
    `state` VARCHAR(2) DEFAULT '',
    `number` INT(6)
);
SELECT * FROM `adress_client`;
DROP TABLE `adress_client`;

