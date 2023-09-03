import request from 'supertest';

import app from './../app';

describe('Testing the Express Application', () => {
    it('response should have a 200 status', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });
});