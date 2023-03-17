const db = require('../db');


class GenreController {
    async getGenre(req, res) {
        let sql = `SELECT * FROM Genre`;
        const genres = await db.query(sql);
        res.send(genres.rows);
    }
    
    async getOneGenre(req, res) {
        const id = req.params.id;
        let sql = `SELECT * FROM Genre WHERE id = ${id}`;
        const genres = await db.query(sql);
        res.send(genres.rows);
    }

    async createGenre(req, res) {
        const {name} = req.body;
        let sql = `INSERT INTO Genre (name) VALUES (${name})`;
        const genre = await db.query(sql);
        res.send(genre);
    }

    async updateGenre(req, res) {
        const {id, name} = req.body;
        let sql = `UPDATE Genre SET name=${name} WHERE id = ${id}`;
        const genre = await db.query(sql);
        res.send(genre);
    }

    async deleteGenre(req, res) {
        const {id} = req.body;
        let sql = `DELETE FOM Genre WHERE id = ${id}`;
        const genre = await db.query(sql);
        res.send(genre);
    }
}

module.exports = new GenreController();