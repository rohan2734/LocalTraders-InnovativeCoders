const express = require('express');
const router = express.Router();

const vendorControllers = require('../controllers/vendors-controllers');

//postShareInInvestments
router.post("/sharesInInvestments/:vendorID",vendorControllers.postShareInInvestments);
//signup
router.post("/signup",vendorControllers.vendorsSignup);
//login
router.post("/login",vendorControllers.vendorsLogin);
//post business details
router.post("/postBusinessDetails",vendorControllers.postBusinessDetails);

module.exports = router;