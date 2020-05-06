const express = require('express');

const homeController = require('../controllers/home');

const router = express.Router();

console.log('home router');

router.get('/', homeController.homePage);

module.exports = router;
