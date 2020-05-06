const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

console.log('admin router');

// /admin/getData  => POST
router.post('/postData', adminController.execTrace);


// /admin/getJsonData -> GET
router.get('/getJsonData', adminController.getJsonData);

module.exports = router;
