import ItemDb from "../database/ItemDb";
import ErrorModel, { HttpCodes } from "../model/ErrorModel";
import ItemModel, { category, ItemInputDTO, ItemOutputDTO } from "../model/ItemModel";
import IdHandle from "../services/Idhandle";


export default class ItemBusiness {
    
    constructor(
        private db: ItemDb,
    ){}

    private validateItemInputData(item: ItemInputDTO) {
        if(!item.name) throw new ErrorModel('INVALID name', "name required", HttpCodes.BAD_REQUEST, false);
        if(!item.stock) throw new ErrorModel('INVALID stock', "value required", HttpCodes.BAD_REQUEST, false);
        if(!item.b_price) throw new ErrorModel('INVALID b_price', "value required", HttpCodes.BAD_REQUEST, false);
        if(!item.s_price) throw new ErrorModel('INVALID S_price', "value required", HttpCodes.BAD_REQUEST, false);
        if(!item.category) throw new ErrorModel('INVALID category', "category required", HttpCodes.BAD_REQUEST, false);
    };

    public async getItem(): Promise<any> {
        try {
            return await this.db.getItens();
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
                item.category as category,
                item.description
            );
            
            await this.db.createItem(data);
            const itemslist: ItemOutputDTO[] = await this.db.getItens();
            return itemslist;
            
        } catch( error ) {
            throw error;
        }
    };

    public async updateItem(item: ItemInputDTO): Promise<any> {
        try {
            if(!item.id) throw new ErrorModel("Invalid id", "Id not found", HttpCodes.BAD_REQUEST, false);
            let itemArray = Object.entries(item);
            let newItem = itemArray.map( (i) => i !== undefined );
            await this.db.updateItem(newItem);
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