-- SET UP SCHEMA HERE
DROP DATABASE IF EXISTS badmovies;

CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE favorites (
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(200),
  release_date DATE, 
  vote_average DECIMAL(8, 1), 
  poster_path VARCHAR(250)
);