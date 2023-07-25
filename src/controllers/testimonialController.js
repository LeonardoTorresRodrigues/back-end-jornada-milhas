const testimonialModel = require('../models/testimonialModel');

const getTestimonial = async (_req, res) => {
	const testimonials = await testimonialModel.getTestimonial();
	return res.status(200).json(testimonials);
};

const createTestimonial = async (req, res) => {
	const createTestimonials = await testimonialModel.createTestimonial(req.body);
	return res.status(201).json(createTestimonials);
};

const deleteTestimonial = async (req, res) => {
	const { id } = req.params;

	await testimonialModel.deleteTestimonial(id);
	return res.status(204).json();
};

const updateTestimonial = async (req, res) => {
	const { id } = req.params;

	await testimonialModel.updateTestimonial(id, req.body);
	return res.status(204).json();
};

module.exports = {
	getTestimonial,
	createTestimonial,
	deleteTestimonial,
	updateTestimonial,
};