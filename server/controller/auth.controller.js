const pool = require('../queries');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) res.status(400).json({ error: '', errors });

      const { email, password } = req.body;

      const lookAtBd = await pool.query(
        `SELECT email FROM users WHERE email = $1 UNION SELECT email FROM staffs WHERE email = $1`,
        [email]
      );

      if (lookAtBd.rows.length) {
        res.send({ error: 'Пошто вже зайнята.' });
      }

      const hashPassword = bcrypt.hashSync(password, 10);

      const newUser = await pool.query(
        `INSERT INTO users (first_name, middle_name, last_name, gender, date_of_birth, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [
          req.body.first_name,
          req.body.middle_name,
          req.body.last_name,
          req.body.gender,
          req.body.date_of_birth,
          req.body.email,
          hashPassword,
        ]
      );

      res.status(201).json(newUser);
    } catch (e) {
      console.error(e);
      res.status(400).json({ error: '' });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const {
        rows: [user],
      } = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
      if (!user.length) res.status(400).json({ error: '' });

      const isPasswordMatch = bcrypt.compareSync(password, user.password);
      if (!isPasswordMatch) res.status(400).json({ error: '' });

      return user;
    } catch (e) {
      console.error(e);
      res.status(400).json({ error: '' });
    }
  }

  async getUsers(req, res) {
    try {
      res.json();
    } catch (e) {
      console.error(e);
      res.status(400).json({ error: '' });
    }
  }
}

module.exports = new authController();
