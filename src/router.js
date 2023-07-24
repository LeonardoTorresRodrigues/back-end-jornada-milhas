const express = require('express');
const testimonialsController = require('./controllers/testimonialsController');

const router = express.Router();

router.get('/depoimentos', testimonialsController.getTestimonials);
router.post('/depoimentos', testimonialsController.createTestimonials);

module.exports = router;