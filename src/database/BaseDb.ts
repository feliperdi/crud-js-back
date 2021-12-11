import knex, { Knex } from "knex";
import ErrorModel, { HttpCodes } from "../model/ErrorModel";


export default abstract class BaseDb {
    private static connection: Knex | null;

    protected getConnection(): Knex {
        BaseDb.connection = knex({
            client: "mysql",
            connection: {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                port: 3306
            }
        });
        return BaseDb.connection
    };

    protected async destroyConnection(): Promise<void> {
        try {
            if(BaseDb.connection) {
                await BaseDb.connection.destroy();
                BaseDb.connection = null;
            }
        } catch (error: any) {
            throw new ErrorModel("FAILED TO DESTROY CONNECTION", error.message, HttpCodes.INTERNAL_SERVER_ERROR, true );
        }
    }
}