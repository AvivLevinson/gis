const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/getData  => GET
router.get('/getData', adminController.execTrace);

module.exports = router;
