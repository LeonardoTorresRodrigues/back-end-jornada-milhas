const connection = require('./connection');

const getTestimonial = async () => {
	const [testimonials] = await connection.execute('SELECT * FROM testimonials');
	return testimonials;
};

const createTestimonial = async (testimonial) => {
	const { message, author, image } = testimonial;

	const query = 'INSERT INTO testimonials(message, author, image) VALUES (?, ?, ?)';

	const [createdTestimonial] = await connection.execute(query, [message, author, image]);
	return { insertId: createdTestimonial.insertId };
};

const deleteTestimonial = async (id) => {
	const removedTestimonial = await connection.execute('DELETE FROM testimonials WHERE id = ?', [id]);
	return removedTestimonial;
};

module.exports = {
	getTestimonial,
	createTestimonial,
	deleteTestimonial,
};