const express = require('express');

const HttpError = require('../error_handler/http-error'); 
const router = express.Router();

const investmentControllers = require('../controllers/investment-controllers');

router.get("/investments/:vendorID",investmentControllers.getSharesInInvestments);


module.exports = router;