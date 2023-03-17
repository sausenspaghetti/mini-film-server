
DROP TABLE IF EXISTS FilmByGenre CASCADE;  
DROP TABLE IF EXISTS Genre CASCADE; 
DROP TABLE IF EXISTS Film CASCADE;

CREATE TABLE Genre (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL UNIQUE
);

CREATE TABLE Film (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	prod_year INT,
	CHECK(prod_year >= 1900)
);

CREATE TABLE FilmByGenre (
	film_id INT REFERENCES Film(id),
	genre_id INT REFERENCES Genre(id),
	UNIQUE(film_id, genre_id)
);


--- INSERT VALUES:
INSERT INTO Genre (name) VALUES
	('comedy'),
	('adventure'),
	('horror'),
	('action'),
	('western'),
	('melodrama'),
	('documentary'),
	('detective'),
	('fantastic'),
	('tradegy'),
	('fairy tail'),
	('cartoon'),
	('drama');
	
INSERT INTO Film(name, prod_year) VALUES
	('Sus', 2000),
	('Ses', NULL);
	