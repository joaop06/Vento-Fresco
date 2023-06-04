CREATE DATABASE ventofresco;
USE ventofresco;
/* user: ventofresco // password: ventofresco*/



CREATE TABLE users(
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(250) UNIQUE NOT NULL,
    `user_name` VARCHAR(20) UNIQUE NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    `position` VARCHAR(20) NOT NULL
);
SELECT * FROM users;
DROP TABLE users;


CREATE TABLE products(
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(9,2) NOT NULL,
    `description` TEXT NOT NULL,
    `image` BLOB DEFAULT NULL
);
SELECT * FROM products;
DROP TABLE products;


CREATE TABLE clients (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(250) UNIQUE NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    `cell_phone` VARCHAR(11) DEFAULT NULL,
    `adress_id_fk` INT DEFAULT NULL,
    `cart` VARCHAR(255) DEFAULT '',
    CONSTRAINT `adress_id_fk`
	FOREIGN KEY (`adress_id_fk`) REFERENCES adress_clients (`id`)
);
SELECT * FROM clients;
DROP TABLE clients;


CREATE TABLE adress_clients(
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `address` VARCHAR(80) DEFAULT '',
    `neighborhood` VARCHAR(30) DEFAULT '',
    `city` VARCHAR(30) DEFAULT '',
    `state` VARCHAR(2) DEFAULT '',
    `number` INT(6)
);
SELECT * FROM adress_clients;
DROP TABLE adress_clients;

