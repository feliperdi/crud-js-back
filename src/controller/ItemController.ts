import { Request, Response } from "express";
import ItemBusiness from "../business/ItemBusiness";
import ItemDb from "../database/ItemDb";
import ErrorModel, { HttpCodes } from "../model/ErrorModel";
import { ItemInputDTO } from "../model/ItemModel";



export default class ItemController {

    private static createBusiness(): ItemBusiness {
        return new ItemBusiness(
            new ItemDb(),
        );
    }



    public async getItem(req: Request, res: Response): Promise<void> {
        try {
            const business = ItemController.createBusiness();
            const data = await business.getItem();
            res.status(200).send(data);
        } catch(error: any) {
            if(error.httpCode) {
                res.status(error.httpCode).send(error.message);
            } else {
                res.status(500).send("API error");
            }
        }
    }

    public async createItem(req: Request, res: Response): Promise<void> {
        try {
            const business = ItemController.createBusiness();
            const item: ItemInputDTO = {
                name: req.body.name,
                b_price: req.body.b_price,
                s_price: req.body.s_price,
                category: req.body.category,
                stock: req.body.stock,
                description: req.body.description
            };
            const data = await business.createItem(item);
            res.status(200).send(data);
        } catch(error: any) {
            if(error.httpCode) {
                res.status(error.httpCode).send(error.message);
            } else {
                res.status(500).send("API error");
            }
        }
    }


    public async updateItem(req: Request, res: Response): Promise<void> {
        try {
            const business = ItemController.createBusiness();
            const item: ItemInputDTO = {
                id: req.body.id,
                name: req.body.name,
                b_price: req.body.b_price,
                s_price: req.body.s_price,
                stock: req.body.stock,
                category: req.body.category,
                description: req.body.description
            };
            const data = await business.updateItem(item);
            res.status(200).send(data);
        } catch(error: any) {
            if(error.httpCode) {
                res.status(error.httpCode).send(error.message);
            } else {
                res.status(500).send("API error");
            }
        }
    };

    public async deleteItem(req: Request, res: Response): Promise<void> {
        try {
            const business = ItemController.createBusiness();
            const item: ItemInputDTO = {
                id: req.body.id,
            };
            const data = await business.deleteItem(item);
            res.status(200).send(data);
        } catch(error: any) {
            if(error.httpCode) {
                res.status(error.httpCode).send(error.message);
            } else {
                res.status(500).send("API error");
            }
        }
    };
}