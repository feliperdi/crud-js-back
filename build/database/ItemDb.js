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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorModel_1 = __importStar(require("../model/ErrorModel"));
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
                if (error.errno === 1452)
                    throw new ErrorModel_1.default("Invalid category", "Category not exist", ErrorModel_1.HttpCodes.BAD_REQUEST, false);
                if (error.errno === 1062)
                    throw new ErrorModel_1.default('Invalid name', 'name already exist', ErrorModel_1.HttpCodes.ALREADY_EXIST, false);
                else
                    throw new ErrorModel_1.default("DB error", error.message, 500, true);
            }
            finally {
                yield this.destroyConnection();
            }
        });
    }
    ;
    getItems() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getConnection().select("*").into(this.table);
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
                yield this.getConnection().update(item).where({ id: item.id }).into(this.table);
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
    updateItemsCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().update({ category: "OTHERS" }).where({ category: category.name }).into(this.table);
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
                yield this.getConnection().delete().where({ id: item.id }).into(this.table);
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
