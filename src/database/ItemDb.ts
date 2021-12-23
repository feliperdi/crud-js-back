import CategoryModel from "../model/CategoryModel";
import ErrorModel, { HttpCodes } from "../model/ErrorModel";
import ItemModel, { ItemInputDTO } from "../model/ItemModel";
import BaseDb from "./BaseDb";

export default class ItemDb extends BaseDb {
   private table: string  = "itens";

   public async createItem(item: ItemModel): Promise<void> {
       try {
          await this.getConnection()
          .insert({
              id: item.getId(),
              name: item.getName(),
              description: item.getDescription(),
              stock: item.getStock(),
              s_price: item.getSPrice(),
              b_price: item.getBPrice(),
              category: item.getCategory()
            }).into(this.table);
       } catch(error: any) {
        if(error.errno === 1452) throw new ErrorModel("Invalid category","Category not exist", HttpCodes.BAD_REQUEST, false);
        if(error.errno === 1062) throw new ErrorModel('Invalid name', 'name already exist', HttpCodes.ALREADY_EXIST, false);
        else throw new ErrorModel("DB error", error.message, 500, true);
      } finally {
        await this.destroyConnection();
      }
   };

   public async getItems(): Promise<any[]> {
    try {
      return await this.getConnection().select("*").into(this.table);
    } catch(error: any) {
      throw new ErrorModel("DB error", error.message, 500, true);
    } finally {
      await this.destroyConnection();
    }
  };

  public async updateItem(item: any): Promise<void> {
    try {
      await this.getConnection().update(item).where({id: item.id}).into(this.table);
    } catch(error: any) {
      throw new ErrorModel("DB error", error.message, 500, true);
    } finally {
      await this.destroyConnection();
    }
  };

  public async updateItemsCategory(category: CategoryModel): Promise<void> {
    try {
      await this.getConnection().update({category: "OTHERS"}).where({category: category.name}).into(this.table);
    } catch(error: any) {
      throw new ErrorModel("DB error", error.message, 500, true);
    } finally {
      await this.destroyConnection();
    }
  };

  public async deleteItem(item: ItemInputDTO): Promise<void> {
    try {
      await this.getConnection().delete().where({id: item.id as string}).into(this.table);
    } catch(error: any) {
      throw new ErrorModel("DB error", error.message, 500, true);
    } finally {
      await this.destroyConnection();
    }
  };
   

}