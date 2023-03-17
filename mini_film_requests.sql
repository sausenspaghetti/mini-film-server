-- Примеры запросов:

/*
    --------------------------------- GET 
*/
-- 1. Get All Films
SELECT 
    F.name AS film_name,
    F.prod_year AS prod_year, 
    G.name AS genre
FROM Films F
    JOIN FilmByGenres FG 
        ON FG.film_id = F.id 
    JOIN Genre G 
        ON G.id = FG.genre_id; 

-- 2. Get Film By Id (оптимизация?)
SELECT 
    F.name AS film_name,
    F.prod_year AS prod_year, 
    G.name AS genre
FROM Films F
    JOIN FilmByGenres FG 
        ON FG.film_id = F.id 
    JOIN Genre G 
        ON G.id = FG.genre_id 
WHERE F.id = 1;

-- 3. get All genres
SELECT 
    G.name AS name
FROM Genre G;

-- 4. get genre by id
SELECT
    G.name AS name
FROM Genre G
WHERE id = 1;


/*
    --------------------------------- PUT 
*/

-- 1. add new film
INSERT INTO Film (name, prod_year) VALUES ('WALL-E', 2008);
-- If genres is exists: --> other request, i don't care

-- 2. add new genres
INSERT INTO Genre (name) VALUES ('sci-fi');

/*
    --------------------------------- POST
*/



/*
    --------------------------------- DELETE 
*/
-- 1. Delete film by id
DELETE FROM Film WHERE id=1;
DELETE FROM FilmByGenre WHERE film_id =1;

-- 2. Delete genre by id
DELETE FROM Genre WHERE id=1;
DELETE FROM FilmByGenre WHERE genre_id =1;
