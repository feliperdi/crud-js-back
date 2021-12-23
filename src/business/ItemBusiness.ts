import ItemDb from "../database/ItemDb";
import ErrorModel, { HttpCodes } from "../model/ErrorModel";
import ItemModel, { ItemInputDTO, ItemOutputDTO } from "../model/ItemModel";
import IdHandle from "../services/Idhandle";


export default class ItemBusiness {
    
    constructor(
        private db: ItemDb,
    ){}

    private validateItemInputData(item: ItemInputDTO) {
        if(!item.name) throw new ErrorModel('INVALID name', "name required", HttpCodes.BAD_REQUEST, false);
        if(typeof item.stock !== 'number') throw new ErrorModel('INVALID stock', "stock value required", HttpCodes.BAD_REQUEST, false);
        if(typeof item.b_price !== 'number') throw new ErrorModel('INVALID b_price', "b_price value required", HttpCodes.BAD_REQUEST, false);
        if(typeof item.s_price !== 'number') throw new ErrorModel('INVALID S_price', "s_price value required", HttpCodes.BAD_REQUEST, false);
        if(!item.category) throw new ErrorModel('INVALID category', "category required", HttpCodes.BAD_REQUEST, false);
    };

    public async getItem(): Promise<any> {
        try {
            return await this.db.getItems();
        } catch(error) {
            throw error;
        }
    }

    public async createItem(item: ItemInputDTO): Promise<ItemOutputDTO[]> {
        try {
            this.validateItemInputData(item);
            const id = IdHandle.generate();
            const data = new ItemModel(
                id,
                item.name as string,
                item.b_price as number,
                item.s_price as number,
                item.stock as number,
                item.category as string,
                item.description
            );
            
            await this.db.createItem(data);
            const itemslist: ItemOutputDTO[] = await this.db.getItems();
            return itemslist;
            
        } catch( error ) {
            throw error;
        }
    };

    public async updateItem(item: ItemInputDTO): Promise<any> {
        try {
            if(!item.id) throw new ErrorModel("Invalid id", "Id not found", HttpCodes.BAD_REQUEST, false);
            this.validateItemInputData(item);
            await this.db.updateItem(item);
            return await this.getItem();            
        } catch(error) {
            throw error;
        }
    };

    public async deleteItem(item: ItemInputDTO): Promise<any> {
        try {
            if(!item.id) throw new ErrorModel("Invalid id", "Id not found", HttpCodes.BAD_REQUEST, false);
            await this.db.deleteItem(item);          
        } catch(error) {
            throw error;
        }
    };
}