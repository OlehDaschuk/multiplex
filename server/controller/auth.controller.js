const pool = require('../queries');

class authController {
  async registration(req, res, next) {
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

      const newUser = await pool.query(
        `INSERT INTO users (first_name, middle_name, last_name, gender, date_of_birth, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [
          req.body.first_name,
          req.body.middle_name,
          req.body.last_name,
          req.body.gender,
          req.body.date_of_birth,
          req.body.email,
          password,
        ]
      );

      res.status(201).json(newUser);
    } catch (e) {
      next();
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const {
        rows: [user],
      } = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
      if (!user?.length) {
        res.status(400).json({ error: '' });
        return;
      }

      if (password === user?.password) {
        res.status(400).json({ error: '' });
        return;
      }

      res.send(user);
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
