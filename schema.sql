DROP DATABASE IF EXISTS Legends;

CREATE DATABASE Legends;

USE Legends;
SET character_set_client=utf8, character_set_connection=utf8, character_set_database=utf8, character_set_results=utf8, character_set_server=utf8;

CREATE TABLE Trending (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    pointId int NOT NULL
);

CREATE TABLE PointOfInterest (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    coordinates point NOT NULL,
    averageRating int NOT NULL
);

-- INSERT INTO PointOfInterest (name, image, coordinates, averageRating) VALUES ('Austin Capitol Building', );