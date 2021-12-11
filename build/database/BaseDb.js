"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const ErrorModel_1 = __importStar(require("../model/ErrorModel"));
class BaseDb {
    getConnection() {
        BaseDb.connection = knex_1.default({
            client: "mysql",
            connection: {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                port: 3306
            }
        });
        return BaseDb.connection;
    }
    ;
    destroyConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (BaseDb.connection) {
                    yield BaseDb.connection.destroy();
                    BaseDb.connection = null;
                }
            }
            catch (error) {
                throw new ErrorModel_1.default("FAILED TO DESTROY CONNECTION", error.message, ErrorModel_1.HttpCodes.INTERNAL_SERVER_ERROR, true);
            }
        });
    }
}
exports.default = BaseDb;
