const express = require('express');
const router = express.Router();

const testimonialController = require('./controllers/testimonialController');
const testimonialMiddleware = require('./middlewares/testimonialMiddleware');

router.get('/depoimentos', testimonialController.getTestimonial);
router.post('/depoimentos', testimonialMiddleware.validateFieldMessage, testimonialController.createTestimonial);
router.delete('/depoimentos/:id', testimonialController.deleteTestimonial);
router.put('/depoimentos/:id',
	testimonialMiddleware.validateFieldMessage,
	testimonialMiddleware.validateFieldAuthor,
	testimonialController.updateTestimonial
);

module.exports = router;