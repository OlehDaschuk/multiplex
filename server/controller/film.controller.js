const pool = require('../queries');

class FilmController {
  async getNumberOfFilms(req, res) {
    const data = await pool.query(`SELECT count(id) FROM users;`);
    res.send(data.rows[0]);
  }

  async getFilmsInRent(req, res) {
    const { offset = 0, limit = 2 } = req.query;

    try {
      const data = await pool.query(
        `SELECT * FROM films WHERE rental_start <= $1 AND $1 <= rental_ending OFFSET $2 FETCH NEXT $3 ROWS ONLY;`,
        [new Date().toISOString(), offset, limit]
      );

      res.send(data.rows);
    } catch (e) {
      res.send({ error: e });
    }
  }

  async createFilm(req, res) {
    const {} = req.body;
    const data = await pool.query(
      `INSERT INTO users (first_name, middle_name, last_name, gender, date_of_birth, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [new Date().toISOString(), limitStart]
    );

    res.send(data.rows);
  }
}

module.exports = new FilmController();
