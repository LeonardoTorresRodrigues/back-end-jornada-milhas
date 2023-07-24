const connection = require('./connection');

const getTestimonials = async () => {
	const [testimonials] = await connection.execute('SELECT * FROM testimonials');
	return testimonials;
};

module.exports = {
	getTestimonials
};