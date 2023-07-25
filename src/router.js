const express = require('express');
const router = express.Router();

const reviewController = require('./controllers/reviewController');
const reviewMiddleware = require('./middlewares/reviewMiddleware');

router.get('/depoimentos', reviewController.getReview);
router.post('/depoimentos', reviewMiddleware.validateFieldMessage, reviewController.createReview);
router.delete('/depoimentos/:id', reviewController.deleteReview);
router.put('/depoimentos/:id',
	reviewMiddleware.validateFieldMessage,
	reviewMiddleware.validateFieldAuthor,
	reviewController.updateReview
);

module.exports = router;