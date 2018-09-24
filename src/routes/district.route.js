const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const district_controller = require('../controllers/district.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/district', district_controller.getAllDistricts);
module.exports = router;