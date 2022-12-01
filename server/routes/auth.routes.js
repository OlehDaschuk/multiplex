const express = require('express');
const router = express.Router();
const pool = require('../queries');
const controller = require('../controller/auth.controller');
const { check } = require('express-validator');

router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.getUsers);

module.exports = router;
