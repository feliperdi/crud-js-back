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
});

describe("Testing all CATEGORY paths", () => {
    const category: CategoryModel = {
        id: "12345678",
        name: "mockI"
    };

    test("It should response the GET method", async () => {
        const response = await request(app).get('/category');

        expect(response.statusCode).toBe(200);
    });
    test("It should response the POST method", async () => {
        const response = await request(app).post('/category');
        expect(response.statusCode).toBe(400);
    });
    test("It should response the PUT method", async () => {
        const response = await request(app).put('/category');
        expect(response.statusCode).toBe(400);
    });
    test("It should response the DELETE method", async () => {
        const response = await request(app).delete('/category');
        expect(response.statusCode).toBe(400);
    });
});

