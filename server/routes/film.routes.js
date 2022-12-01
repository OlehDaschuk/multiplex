const express = require('express');
const router = express.Router();
const pool = require('../queries');
const controller = require('../controller/film.controller');

// router.get('/film/:id', filmController.getUserByUUID);

router.get('/films-in-rent', controller.getFilmsInRent);
router.get('/number-of-available-films', controller.getNumberOfFilms);

module.exports = router;
