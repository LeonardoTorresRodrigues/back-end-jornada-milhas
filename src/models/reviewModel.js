const connection = require('./connection');

const getRandomReview = async () => {
	const [randomReview] = await connection.execute('SELECT * FROM testimonials ORDER BY RAND() LIMIT 3');
	return randomReview;
};

const getReview = async () => {
	const [review] = await connection.execute('SELECT * FROM testimonials');
	return review;
};

const createReview = async (review) => {
	const { message, author, image } = review;

	const query = 'INSERT INTO testimonials(message, author, image) VALUES (?, ?, ?)';

	const [createdReview] = await connection.execute(query, [message, author, image]);
	return { insertId: createdReview.insertId };
};

const deleteReview = async (id) => {
	const [removedReview] = await connection.execute('DELETE FROM testimonials WHERE id = ?', [id]);
	return removedReview;
};

const updateReview = async (id, review) => {
	const { message, author, image } = review;

	const query = 'UPDATE testimonials SET message = ?, author = ?, image = ? WHERE id = ?';

	const [updatedReview] = await connection.execute(query, [message, author, image, id]);
	return updatedReview;
};

module.exports = {
	getReview,
	createReview,
	deleteReview,
	updateReview,
	getRandomReview,
};