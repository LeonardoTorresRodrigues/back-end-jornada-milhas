const request = require('supertest');
const app = require('../src/app');

describe('"get" status code response', () => {
	it('must response status code 200', async () => {
		const response = await request(app).get('/depoimentos');
		expect(response.statusCode).toBe(200);
	});

	it('must response status code 404', async () => {
		const response = await request(app).get('/teste');
		expect(response.statusCode).toBe(404);
	});
});

describe('"post" status code response', () => {
	it('must response status code 201', async () => {
		const response = await request(app).post('/depoimentos').send({
			message: 'test message',
			author: 'test author',
			image: 'testiamge.jpg',
		});
		expect(response.statusCode).toBe(201);
	});

	it('must response status code 404', async () => {
		const response = await request(app).post('/teste').send({
			message: 'test message',
			author: 'test author',
			image: 'testimage.jpg',
		});
		expect(response.statusCode).toBe(404);
	});
});

describe('"delete" status code response', () => {
	it('must response status code 204', async () => {
		const idToDelete = '16';

		const response = await request(app).delete(`/depoimentos/${idToDelete}`);
		expect(response.statusCode).toBe(204);
	});
});

describe('"put" status code response', () => {
	it('must response status code 204', async () => {
		const idToUpdate = '9';
		const reviewUpdate = {
			message: 'put test message',
			author: 'put test author',
			image: 'puttestimage.jpg',
		};

		const response = await request(app)
		.put(`/depoimentos/${idToUpdate}`)
		.send(reviewUpdate)
		expect(response.statusCode).toBe(204);
	});
});