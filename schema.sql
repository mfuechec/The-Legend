DROP DATABASE IF EXISTS RecipeBook;

CREATE DATABASE RecipeBook;

USE RecipeBook;
SET character_set_client=utf8, character_set_connection=utf8, character_set_database=utf8, character_set_results=utf8, character_set_server=utf8;

CREATE TABLE MealRecipes (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    instructions VARCHAR(250) NOT NULL,
    image VARCHAR(150) NOT NULL,
    ingredient1 VARCHAR(50) NOT NULL,
    ingredient2 VARCHAR(50) NOT NULL,
    ingredient3 VARCHAR(50) NOT NULL,
    ingredient4 VARCHAR(50) NOT NULL,
    ingredient5 VARCHAR(50) NOT NULL,
    ingredient6 VARCHAR(50) NOT NULL,
    ingredient7 VARCHAR(50) NOT NULL,
    ingredient8 VARCHAR(50) NOT NULL,
    ingredient9 VARCHAR(50) NOT NULL,
    ingredient10 VARCHAR(50) NOT NULL,
    ingredient11 VARCHAR(50) NOT NULL,
    ingredient12 VARCHAR(50) NOT NULL,
    ingredient13 VARCHAR(50) NOT NULL,
    ingredient14 VARCHAR(50) NOT NULL,
    ingredient15 VARCHAR(50) NOT NULL,
    ingredient16 VARCHAR(50) NOT NULL,
    ingredient17 VARCHAR(50) NOT NULL,
    ingredient18 VARCHAR(50) NOT NULL,
    ingredient19 VARCHAR(50) NOT NULL,
    ingredient20 VARCHAR(50) NOT NULL,
    measurement1 VARCHAR(50) NOT NULL,
    measurement2 VARCHAR(50) NOT NULL,
    measurement3 VARCHAR(50) NOT NULL,
    measurement4 VARCHAR(50) NOT NULL,
    measurement5 VARCHAR(50) NOT NULL,
    measurement6 VARCHAR(50) NOT NULL,
    measurement7 VARCHAR(50) NOT NULL,
    measurement8 VARCHAR(50) NOT NULL,
    measurement9 VARCHAR(50) NOT NULL,
    measurement10 VARCHAR(50) NOT NULL,
    measurement11 VARCHAR(50) NOT NULL,
    measurement12 VARCHAR(50) NOT NULL,
    measurement13 VARCHAR(50) NOT NULL,
    measurement14 VARCHAR(50) NOT NULL,
    measurement15 VARCHAR(50) NOT NULL,
    measurement16 VARCHAR(50) NOT NULL,
    measurement17 VARCHAR(50) NOT NULL,
    measurement18 VARCHAR(50) NOT NULL,
    measurement19 VARCHAR(50) NOT NULL,
    measurement20 VARCHAR(50) NOT NULL,
    user VARCHAR(50) NOT NULL
);

CREATE TABLE MealCategories (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    category VARCHAR(50) NOT NULL,
    mainID int NOT NULL
);

CREATE TABLE MealOrigins (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    origin VARCHAR(50) NOT NULL,
    mainID int NOT NULL
);

CREATE TABLE MealIngredients (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    origin VARCHAR(50) NOT NULL
);

CREATE TABLE DrinkRecipes (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    instructions VARCHAR(250) NOT NULL,
    image VARCHAR(150) NOT NULL,
    ingredient1 VARCHAR(50) NOT NULL,
    ingredient2 VARCHAR(50) NOT NULL,
    ingredient3 VARCHAR(50) NOT NULL,
    ingredient4 VARCHAR(50) NOT NULL,
    ingredient5 VARCHAR(50) NOT NULL,
    ingredient6 VARCHAR(50) NOT NULL,
    ingredient7 VARCHAR(50) NOT NULL,
    ingredient8 VARCHAR(50) NOT NULL,
    ingredient9 VARCHAR(50) NOT NULL,
    ingredient10 VARCHAR(50) NOT NULL,
    ingredient11 VARCHAR(50) NOT NULL,
    ingredient12 VARCHAR(50) NOT NULL,
    ingredient13 VARCHAR(50) NOT NULL,
    ingredient14 VARCHAR(50) NOT NULL,
    ingredient15 VARCHAR(50) NOT NULL,
    ingredient16 VARCHAR(50) NOT NULL,
    ingredient17 VARCHAR(50) NOT NULL,
    ingredient18 VARCHAR(50) NOT NULL,
    ingredient19 VARCHAR(50) NOT NULL,
    ingredient20 VARCHAR(50) NOT NULL,
    measurement1 VARCHAR(50) NOT NULL,
    measurement2 VARCHAR(50) NOT NULL,
    measurement3 VARCHAR(50) NOT NULL,
    measurement4 VARCHAR(50) NOT NULL,
    measurement5 VARCHAR(50) NOT NULL,
    measurement6 VARCHAR(50) NOT NULL,
    measurement7 VARCHAR(50) NOT NULL,
    measurement8 VARCHAR(50) NOT NULL,
    measurement9 VARCHAR(50) NOT NULL,
    measurement10 VARCHAR(50) NOT NULL,
    measurement11 VARCHAR(50) NOT NULL,
    measurement12 VARCHAR(50) NOT NULL,
    measurement13 VARCHAR(50) NOT NULL,
    measurement14 VARCHAR(50) NOT NULL,
    measurement15 VARCHAR(50) NOT NULL,
    measurement16 VARCHAR(50) NOT NULL,
    measurement17 VARCHAR(50) NOT NULL,
    measurement18 VARCHAR(50) NOT NULL,
    measurement19 VARCHAR(50) NOT NULL,
    measurement20 VARCHAR(50) NOT NULL,
    user VARCHAR(50) NOT NULL
);

CREATE TABLE DrinkCategories (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    category VARCHAR(50) NOT NULL,
    mainID int NOT NULL
);

CREATE TABLE DrinkOrigins (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    origin VARCHAR(50) NOT NULL,
    mainID int NOT NULL
);

CREATE TABLE DrinkIngredients (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    origin VARCHAR(50) NOT NULL
);