const validateBody = (req, res, next) => {
	const { body } = req;

	if (body.message === undefined) {
		return res.status(400).json({ message: 'The field "message" is required' });
	}

	if (body.message === '') {
		return res.status(400).json({ message: 'message cannot be empty' });
	}

	next();
};

module.exports = {
	validateBody,
};