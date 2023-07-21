const express = require('express');
const testimonialsController = require('./controllers/testimonialsController');

const router = express.Router();

router.get('/depoimentos', testimonialsController.getTestimonials);

module.exports = router;