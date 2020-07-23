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
    latitude DECIMAL NOT NULL,
    longitude DECIMAL NOT NULL,
    averageRating int NOT NULL
);

INSERT INTO PointOfInterest (name, image, latitude, longitude, averageRating) VALUES ('Austin Capitol Building', 's3://the-legend/Austin State Capitol/0.jpg', 30.274399, -97.740492, 3);
INSERT INTO PointOfInterest (name, image, latitude, longitude, averageRating) VALUES ('Barton Springs', 's3://the-legend/Barton Springs/0.jpeg', 30.259110, -97.752220, 4.5);
INSERT INTO PointOfInterest (name, image, latitude, longitude, averageRating) VALUES ('Sixth Street', 's3://the-legend/Sixth Street/0.jpeg', 30.266746, -97.738058, 1.2);

INSERT INTO Trending (pointId) VALUES (1);
INSERT INTO Trending (pointId) VALUES (2);
INSERT INTO Trending (pointId) VALUES (3);