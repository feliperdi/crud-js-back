import CategoryDb from "../database/CategoryDb";
import ItemDb from "../database/ItemDb";
import CategoryModel from "../model/CategoryModel";
import ErrorModel, { HttpCodes } from "../model/ErrorModel";
import IdHandle from "../services/Idhandle";


export default class CategoryBusiness {

    constructor(
        private db: CategoryDb,
        private itemDb: ItemDb
    ){}

    public async getCategory(): Promise<CategoryModel[]> {
        try {
            const categoryList: CategoryModel[] = await this.db.getCategory();
            return categoryList;
        } catch (error: any) {
            if(error.httpCode) {
                throw error;
            } else {
                throw new ErrorModel("API error", "Internal server error", HttpCodes.INTERNAL_SERVER_ERROR, true);
            }
        }
    };

    public async createCategory(category: CategoryModel ): Promise<CategoryModel[]> {
        try {
            if(!category.name) throw new ErrorModel('invalid name', 'name required', HttpCodes.BAD_REQUEST, false);
            const id =  IdHandle.generate();
            await this.db.createCategory({id: id, name: category.name});
            const categoryList: CategoryModel[] = await this.db.getCategory();
            return categoryList;
        } catch (error: any) {
            if(error.httpCode) {
                throw error;
            } else {
                throw new ErrorModel("API error", "Internal server error", HttpCodes.INTERNAL_SERVER_ERROR, true);
            }
        }
    };

    public async updateCategory(category: CategoryModel ): Promise<CategoryModel[]> {
        try {
            if(!category.name) throw new ErrorModel('invalid name', 'name required', HttpCodes.BAD_REQUEST, false);
            await this.db.updateCategory({id: category.id, name: category.name});
            const categoryList: CategoryModel[] = await this.db.getCategory();
            return categoryList;
        } catch (error: any) {
            if(error.httpCode) {
                throw error;
            } else {
                throw new ErrorModel("API error", "Internal server error", HttpCodes.INTERNAL_SERVER_ERROR, true);
            }
        }
    };

    public async deleteCategory(category: CategoryModel ): Promise<CategoryModel[]> {
        try {
            if(!category.id) throw new ErrorModel('invalid id', 'id required', HttpCodes.BAD_REQUEST, false);
            if(!category.name) throw new ErrorModel('invalid name', 'name required', HttpCodes.BAD_REQUEST, false);
            await this.itemDb.updateItemsCategory(category)
            await this.db.deleteCategory({id: category.id, name: category.name});
            const categoryList: CategoryModel[] = await this.db.getCategory();
            return categoryList;
        } catch (error: any) {
            if(error.httpCode) {
                throw error;
            } else {
                throw new ErrorModel("API error", "Internal server error", HttpCodes.INTERNAL_SERVER_ERROR, true);
            }
        }
    };

    
}