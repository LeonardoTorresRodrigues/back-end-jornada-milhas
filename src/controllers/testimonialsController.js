const testimonialsModel = require('../models/testimonialsModel');

const getTestimonials = async (_req, res) => {
	const testimonials = await testimonialsModel.getTestimonials();
	return res.status(200).json(testimonials);
};

const createTestimonials = async (req, res) => {
	const createTestimonials = await testimonialsModel.createTestimonials(req.body);
	return res.status(201).json(createTestimonials);
};

module.exports = {
	getTestimonials,
	createTestimonials,
};