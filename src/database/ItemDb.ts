import ErrorModel from "../model/ErrorModel";
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
        throw new ErrorModel("DB error", error.message, 500, true);
      } finally {
        await this.destroyConnection();
      }
   };

   public async getItens(): Promise<any[]> {
    try {
      const rawData = await this.getConnection().select("*").into(this.table);
      const data = rawData[0][0];
      return data;
    } catch(error: any) {
      throw new ErrorModel("DB error", error.message, 500, true);
    } finally {
      await this.destroyConnection();
    }
  };

  public async updateItem(item: any): Promise<void> {
    try {
      await this.getConnection().insert(item).where(item.id as string).into(this.table);
    } catch(error: any) {
      throw new ErrorModel("DB error", error.message, 500, true);
    } finally {
      await this.destroyConnection();
    }
  };

  public async deleteItem(item: ItemInputDTO): Promise<void> {
    try {
      await this.getConnection().delete().where(item.id as string).into(this.table);
    } catch(error: any) {
      throw new ErrorModel("DB error", error.message, 500, true);
    } finally {
      await this.destroyConnection();
    }
  };
   

}