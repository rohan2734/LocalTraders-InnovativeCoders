const express = require('express');

const router = express.Router();

const investorsControllers = require('../controllers/investors-controllers');

//signup
router.post("/signup",investorsControllers.investorsSignup);
//login
router.post("/login",investorsControllers.investorsLogin);


module.exports = router;