const express = require('express');

const router = express.Router();

const investmentControllers = require('../controllers/investment-controllers');

router.get("/investments",investmentControllers.getSharesInInvestments);


module.exports = router;