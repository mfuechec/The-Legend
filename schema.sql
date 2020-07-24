DROP DATABASE IF EXISTS Legends;

CREATE DATABASE Legends;

USE Legends;
SET character_set_client=utf8, character_set_connection=utf8, character_set_database=utf8, character_set_results=utf8, character_set_server=utf8;

CREATE TABLE Trending (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    pointId int NOT NULL,
    coordinates POINT NOT NULL
);

CREATE TABLE PointOfInterest (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    coordinates POINT NOT NULL,
    averageRating DECIMAL(2,1) NOT NULL
);

INSERT INTO PointOfInterest (name, image, coordinates, averageRating) VALUES ('Austin Capitol Building', 'https://the-legend.s3.us-east-2.amazonaws.com/Austin+State+Capitol/0.jpg', POINT(30.274399, -97.740492), 3);
INSERT INTO PointOfInterest (name, image, coordinates, averageRating) VALUES ('Barton Springs', 'https://the-legend.s3.us-east-2.amazonaws.com/Barton+Springs/0.jpeg', POINT(30.259110, -97.752220), 4.5);
INSERT INTO PointOfInterest (name, image, coordinates, averageRating) VALUES ('Sixth Street', 'https://the-legend.s3.us-east-2.amazonaws.com/Sixth+Street/0.jpeg', POINT(30.266746, -97.738058), 1.2);

INSERT INTO Trending (pointId, coordinates) VALUES (1, POINT(30.274399, -97.740492));
INSERT INTO Trending (pointId, coordinates) VALUES (2, POINT(30.259110, -97.752220));
INSERT INTO Trending (pointId, coordinates) VALUES (3, POINT(30.266746, -97.738058));
