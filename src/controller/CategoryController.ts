import { Request, Response } from "express";
import CategoryBusiness from "../business/CategoryBusiness";
import CategoryDb from "../database/CategoryDb";
import ItemDb from "../database/ItemDb";
import CategoryModel from "../model/CategoryModel";
import ErrorModel, { HttpCodes } from "../model/ErrorModel";


const categoryBusiness = new CategoryBusiness(new CategoryDb(), new ItemDb());

export default class CategoryController {

    private static verifyKey(auth: string): void {
        if(auth !== process.env.API_KEY || auth === undefined) throw new ErrorModel("Not authorized","Not authorized", HttpCodes.NOT_AUTHORIZED, false);
    };

   public async getCategory(req: Request, res: Response){
        try {
            CategoryController.verifyKey(req.header("Authorization") as string);
            const data = await categoryBusiness.getCategory();
            res.status(200).send(data);
        }catch(error: any) {
            res.status(error.httpCode).send(error.message);
        }
    };

    public async createCategory(req: Request, res: Response){
        try {
            CategoryController.verifyKey(req.header("Authorization") as string);
            const category: CategoryModel = {
                id: req.body.id,
                name: req.body.name
            }
            const data = await categoryBusiness.createCategory(category);
            res.status(200).send(data);
        }catch(error: any) {
            res.status(error.httpCode).send(error.message);
        }
    };

    public async updateCategory(req: Request, res: Response){
        try {
            CategoryController.verifyKey(req.header("Authorization") as string);
            const category: CategoryModel = {
                id: req.body.id,
                name: req.body.name
            }
            const data = await categoryBusiness.updateCategory(category);
            res.status(200).send(data);
        }catch(error: any) {
            res.status(error.httpCode).send(error.message);
        }
    };
    

    public async deleteCategory(req: Request, res: Response){
        try {
            CategoryController.verifyKey(req.header("Authorization") as string);
            const category: CategoryModel = {
                id: req.body.id,
                name: req.body.name
            }
            const data = await categoryBusiness.deleteCategory(category);
            res.status(200).send(data);
        }catch(error: any) {
            console.log(error);
            res.status(error.httpCode).send(error.message);
        }
    };

}