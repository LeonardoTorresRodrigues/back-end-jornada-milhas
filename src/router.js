const express = require('express');
const router = express.Router();

const testimonialController = require('./controllers/testimonialController');
const testimonialMiddleware = require('./middlewares/testimonialMiddleware');

router.get('/depoimentos', testimonialController.getTestimonial);
router.post('/depoimentos', testimonialMiddleware.validateBody, testimonialController.createTestimonial);

module.exports = router;