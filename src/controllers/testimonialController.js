const testimonialModel = require('../models/testimonialModel');

const getTestimonial = async (_req, res) => {
	const testimonials = await testimonialModel.getTestimonial();
	return res.status(200).json(testimonials);
};

const createTestimonial = async (req, res) => {
	const createTestimonials = await testimonialModel.createTestimonial(req.body);
	return res.status(201).json(createTestimonials);
};

module.exports = {
	getTestimonial,
	createTestimonial,
};