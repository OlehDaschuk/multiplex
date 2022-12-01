const pool = require('../queries');

class UserController {
  async getUserByUUID(req, res) {
    try {
      const data = await pool.query(
        // `SELECT id FROM users WHERE uuid = $1 UNION SELECT id FROM staffs WHERE uuid = $1`,
        `SELECT * FROM users WHERE uuid = $1`,
        [req.params.uuid]
      );

      res.send(data.rows[0]);
    } catch (e) {
      res.send({ error: e });
    }
  }

  async getUsers(req, res) {
    const data = await pool.query(`SELECT * FROM users`);
    res.send(data.rows);
  }

  async getUser(req, res) {
    const { email, password } = req.query;

    try {
      const data = await pool.query(
        `SELECT * FROM users WHERE email = $1 UNION SELECT * FROM staffs WHERE email = $1`,
        [email]
      );

      if (data.rows[0].password !== password) {
        res.status(404).send({ message: 'Не вірний пароль.' });
      }

      res.send(data.rows[0]);
    } catch (e) {
      res.send({ error: e.detail });
    }
  }

  async createUser(req, res) {
    try {
      const { email } = req.body;

      const lookAtBd = await pool.query(
        `SELECT email FROM users WHERE email = $1 UNION SELECT email FROM staffs WHERE email = $1`,
        [email]
      );

      if (lookAtBd.rows.length) {
        res.send({ error: 'Пошто вже зайнята.' });
      }

      res.status(201);
    } catch (e) {
      res.send({ error: e.detail });
    }

    try {
      const data = await pool.query(
        `INSERT INTO users (first_name, middle_name, last_name, gender, date_of_birth, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [
          req.body.first_name,
          req.body.middle_name,
          req.body.last_name,
          req.body.gender,
          req.body.date_of_birth,
          req.body.email,
          req.body.password,
        ]
      );

      res.ststus(201).send(data);
    } catch (e) {
      res.send({ error: e.detail });
    }
  }

  async updateUser(req, res) {
    const { uuid, ...updatedData } = req.body;
    try {
      const newData = await pool.query(`UPDATE users SET $1 WHERE uuid = $2;`, [
        updatedData
          .map((data) => {
            return `${data} = ${updatedData[data]}`;
          })
          .join(', '),
        uuid,
      ]);

      res.send(newData);
    } catch (e) {
      res.send({ error: e.detail });
    }
  }

  async deleteUser(req, res) {
    const { uuid, email, password } = req.body;

    try {
      const data = pool.query(
        `DELETE FROM users WHERE uuid = $1 AND email = $2 AND password = $3;`,
        [uuid, email, password]
      );

      res.send(data);
    } catch (e) {
      res.send({ error: e.detail });
    }
  }
}

module.exports = new UserController();
