const express = require('express');
const router = express.Router();

const testimonialsController = require('./controllers/testimonialsController');
const testimonialsMiddleware = require('./middlewares/testimonialsMiddleware');

router.get('/depoimentos', testimonialsController.getTestimonials);
router.post('/depoimentos', testimonialsMiddleware.validateBody, testimonialsController.createTestimonials);

module.exports = router;