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
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorModel_1 = __importDefault(require("../model/ErrorModel"));
const BaseDb_1 = __importDefault(require("./BaseDb"));
class ItemDb extends BaseDb_1.default {
    constructor() {
        super(...arguments);
        this.table = "itens";
    }
    createItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert({
                    id: item.getId(),
                    name: item.getName(),
                    description: item.getDescription(),
                    stock: item.getStock(),
                    s_price: item.getSPrice(),
                    b_price: item.getBPrice(),
                    category: item.getCategory()
                }).into(this.table);
            }
            catch (error) {
                throw new ErrorModel_1.default("DB error", error.message, 500, true);
            }
            finally {
                yield this.destroyConnection();
            }
        });
    }
    ;
    getItens() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rawData = yield this.getConnection().select("*").into(this.table);
                const data = rawData[0][0];
                return data;
            }
            catch (error) {
                throw new ErrorModel_1.default("DB error", error.message, 500, true);
            }
            finally {
                yield this.destroyConnection();
            }
        });
    }
    ;
    updateItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().insert(item).where(item.id).into(this.table);
            }
            catch (error) {
                throw new ErrorModel_1.default("DB error", error.message, 500, true);
            }
            finally {
                yield this.destroyConnection();
            }
        });
    }
    ;
    deleteItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().delete().where(item.id).into(this.table);
            }
            catch (error) {
                throw new ErrorModel_1.default("DB error", error.message, 500, true);
            }
            finally {
                yield this.destroyConnection();
            }
        });
    }
    ;
}
exports.default = ItemDb;
