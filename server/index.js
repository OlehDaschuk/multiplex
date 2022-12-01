const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRouter = require('./routes/user.routes');
const filmRouter = require('./routes/film.routes');
const authRouter = require('./routes/auth.routes');
const cinemaRouter = require('./routes/cinema.routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use('/api', userRouter);
app.use('/api', filmRouter);
app.use('/api', authRouter);
app.use('/api', cinemaRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
