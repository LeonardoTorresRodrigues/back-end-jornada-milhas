const testimonialsModel = require('../models/testimonialsModel');

const getTestimonials = async (req, res) => {

	const testimonials = await testimonialsModel.getTestimonials();

	return res.status(200).json(testimonials);
};

module.exports = {
	getTestimonials
};