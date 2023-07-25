const reviewModel = require('../models/reviewModel');

const getReview = async (_req, res) => {
	const review = await reviewModel.getReview();
	return res.status(200).json(review);
};

const createReview = async (req, res) => {
	const createReview = await reviewModel.createReview(req.body);
	return res.status(201).json(createReview);
};

const deleteReview = async (req, res) => {
	const { id } = req.params;

	await reviewModel.deleteReview(id);
	return res.status(204).json();
};

const updateReview = async (req, res) => {
	const { id } = req.params;

	await reviewModel.updateReview(id, req.body);
	return res.status(204).json();
};

module.exports = {
	getReview,
	createReview,
	deleteReview,
	updateReview,
};