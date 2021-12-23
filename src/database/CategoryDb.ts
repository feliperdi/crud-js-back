import CategoryModel from "../model/CategoryModel";
import ErrorModel, { HttpCodes } from "../model/ErrorModel";
import BaseDb from "./BaseDb"


export default class CategoryDb extends BaseDb {
    private table: string = "category";

    public async getCategory() {
        try {
            const raw = await this.getConnection().select("*").into(this.table);
            return raw;
        }catch(error: any){
            if(error.httpCode) throw error;
            else throw new ErrorModel("DB error", error.message, 500, true);
        } finally {
            await this.destroyConnection();
        }
    }

    public async createCategory(category: CategoryModel) {
        try {
            await this.getConnection().insert(category).into(this.table);
        }catch(error: any){
            if(error.errno === 1062) throw new ErrorModel('Invalid name', 'name already exist', HttpCodes.ALREADY_EXIST, false);
            else throw new ErrorModel("DB error", error.message, 500, true);
        } finally {
            await this.destroyConnection();
        }
    }

    public async updateCategory(category: CategoryModel) {
        try {
            await this.getConnection().update({name: category.name}).where({id: category.id}).into(this.table);
        }catch(error: any){
            if(error.httpCode) throw error;
            else throw new ErrorModel("DB error", error.message, 500, true);
        } finally {
            await this.destroyConnection();
        }
    }

    public async deleteCategory(category: CategoryModel) {
        try {
            if(category.name === "OTHERS") throw new ErrorModel("Invalid category", "cannot delete category OTHERS", HttpCodes.BAD_REQUEST, false);
            await this.getConnection().delete().where({id: category.id}).into(this.table);
        }catch(error: any){
            if(error.httpCode) throw error;
            else throw new ErrorModel("DB error", error.message, 500, true);
        } finally {
            await this.destroyConnection();
        }
    }
}