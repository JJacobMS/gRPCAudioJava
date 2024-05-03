const express = require('express');
const router = express.Router();
const {index} = require('../controllers/home');

router.use("/",index);

module.exports = router;