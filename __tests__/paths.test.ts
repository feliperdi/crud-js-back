import request from 'supertest';
import app from '../src/app';
import CategoryModel from '../src/model/CategoryModel';
import { ItemInputDTO } from '../src/model/ItemModel';

jest.mock("../src/database/ItemDb");
jest.mock("../src/database/CategoryDb");

describe("Testing all ITENS paths", () => {
    const item: ItemInputDTO = {
        id: '12345678',
        name: "mock",
        b_price: 0,
        s_price: 0,
        category: "OTHERS",
        description: "MOCK DESCRIPT",
        stock: 0
    };

    test("It should response the GET method", async () => {
        const response = await request(app).get('/').set('Authorization', process.env.API_KEY);
        expect(response.statusCode).toBe(200);
    });
    test("It should response the POST method", async () => {
        const response = await request(app).post('/').set('Authorization', process.env.API_KEY);
        expect(response.statusCode).toBe(400);
    });
    test("It should response the PUT method", async () => {
        const response = await request(app).put('/').set('Authorization', process.env.API_KEY);
        expect(response.statusCode).toBe(400);
    });
    test("It should response the DELETE method", async () => {
        const response = await request(app).delete('/').set('Authorization', process.env.API_KEY);
        expect(response.statusCode).toBe(400);
    });
});

describe("Testing all CATEGORY paths", () => {
    const category: CategoryModel = {
        id: "12345678",
        name: "mockI"
    };

    test("It should response the GET method", async () => {
        const response = await request(app).get('/category').set('Authorization', process.env.API_KEY);

        expect(response.statusCode).toBe(200);
    });
    test("It should response the POST method", async () => {
        const response = await request(app).post('/category').set('Authorization', process.env.API_KEY).set(category);
        expect(response.statusCode).toBe(400);
    });
    test("It should response the PUT method", async () => {
        const response = await request(app).put('/category').set('Authorization', process.env.API_KEY).set(category);
        expect(response.statusCode).toBe(400);
    });
    test("It should response the DELETE method", async () => {
        const response = await request(app).delete('/category').set('Authorization', process.env.API_KEY).set(category);
        expect(response.statusCode).toBe(400);
    });
});

