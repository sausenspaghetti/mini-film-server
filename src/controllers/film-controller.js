/*
    1. Показать фильм по id:
        {
            name: 'Sus',
            prod_year: 1488,
            genres : [
                'comedy',
                'drama',
                'horror'
            ]
        }
    2. Добавить фильм:
       {
            name: 'Pepe',
            prod_year: 2000,
            // опционально
            genres: [

            ]
       }
    3. Удалить фильм:
       // Также надо удалить все записи в FilmByGenre
       {
            id: 234
       }
       или 
       {
            name: 'Sus',
            prod_year: 1488 
       }
    4. 
*/
const db = require('../db');


class FilmController {
    async getFilms(req, res) {
        let sql = `SELECT * FROM Film`;
        const films = await db.query(sql);
        res.json(films.rows);
    }

    async getOneFilm(req, res) {
        const id = req.params.id;
        let sql = `SELECT * FROM Film WHERE id = ${id}`;
        const films = await db.query(sql);
        res.json(films.rows);
    }

    async createFilm(req, res) {
        const {name, prod_year} = req.body;
        let sql = `INSERT INTO Film (name, prod_year) VALUES (${name}, ${prod_year})`;
        const film = await db.query(sql);
        res.json(film);
    }

    async updateFilm(req, res) {
        const {id, name, prod_year} = req.body;
        let sql = `UPDATE Film SET name=${name}, prod_year=${prod_year} WHERE id = ${id}`;
        const film = await db.query(sql);
        res.json(film);
    }

    async deleteFilm(req, res) {
        const {id} = req.body;
        let sql = `DELETE FOM Film WHERE id = ${id}`;
        const film = await db.query(sql);
        res.json(film);
    }
}

module.exports = new FilmController();