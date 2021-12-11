import request from 'supertest';
import app from '../src/app';

jest.mock("../src/database/ItemDb");

describe("Testing all paths", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
    test("It should response the POST method", async () => {
        const response = await request(app).post('/');
        expect(response.statusCode).toBe(400);
    });
    test("It should response the PUT method", async () => {
        const response = await request(app).put('/');
        expect(response.statusCode).toBe(400);
    });
    test("It should response the DELETE method", async () => {
        const response = await request(app).delete('/');
        expect(response.statusCode).toBe(400);
    });
})

