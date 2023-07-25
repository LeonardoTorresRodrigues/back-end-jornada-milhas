const validateFieldMessage = (req, res, next) => {
	const { body } = req;

	if (body.message === undefined) {
		return res.status(400).json({ message: 'The field "message" is required' });
	}

	if (body.message === '') {
		return res.status(400).json({ message: 'message cannot be empty' });
	}

	next();
};

const validateFieldAuthor = (req, res, next) => {
	const { body } = req;

	if (body.author === undefined) {
		return res.status(400).json({ message: 'The field "author" is required' });
	}

	if (body.author === '') {
		return res.status(400).json({ message: 'author cannot be empty' });
	}

	next();
};

module.exports = {
	validateFieldMessage,
	validateFieldAuthor
};