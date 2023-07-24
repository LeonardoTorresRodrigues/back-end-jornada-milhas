const connection = require('./connection');

const getTestimonials = async () => {
	const [testimonials] = await connection.execute('SELECT * FROM testimonials');
	return testimonials;
};

const createTestimonials = async (testimonial) => {
	const { message, author, image } = testimonial;

	const query = 'INSERT INTO testimonials(message, author, image) VALUES (?, ?, ?)';

	const [createdTestimonial] = await connection.execute(query, [message, author, image]);
	return { insertId: createdTestimonial.insertId };
};

module.exports = {
	getTestimonials,
	createTestimonials,
};