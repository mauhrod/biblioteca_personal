Ejemplo: (Hay que rehacerlo bien)

CREATE DATABASE IF NOT EXISTS biblioteca;


CREATE TABLE category (
	id INT(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE persons (
	id INT(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE books (
	id INT(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY(id)
);