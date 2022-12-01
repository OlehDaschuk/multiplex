const express = require('express');
const router = express.Router();
const pool = require('../queries');
const controller = require('../controller/user.controller');

// router.get('/user/:uuid', controller.getUserByUUID);
// router.post('/user', controller.createUser);
// router.put('/user', controller.updateUser);
// router.delete('/user', controller.deleteUser);

module.exports = router;
