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
const ItemModel_1 = __importDefault(require("../model/ItemModel"));
const Idhandle_1 = __importDefault(require("../services/Idhandle"));
class ItemBusiness {
    constructor(db) {
        this.db = db;
    }
    validateItemInputData(item) {
        if (!item.name)
            throw new ErrorModel_1.default('INVALID name', "name required", ErrorModel_1.HttpCodes.BAD_REQUEST, false);
        if (typeof item.stock !== 'number')
            throw new ErrorModel_1.default('INVALID stock', "stock value required", ErrorModel_1.HttpCodes.BAD_REQUEST, false);
        if (typeof item.b_price !== 'number')
            throw new ErrorModel_1.default('INVALID b_price', "b_price value required", ErrorModel_1.HttpCodes.BAD_REQUEST, false);
        if (typeof item.s_price !== 'number')
            throw new ErrorModel_1.default('INVALID S_price', "s_price  value required", ErrorModel_1.HttpCodes.BAD_REQUEST, false);
        if (!item.category)
            throw new ErrorModel_1.default('INVALID category', "category required", ErrorModel_1.HttpCodes.BAD_REQUEST, false);
    }
    ;
    getItem() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.db.getItems();
            }
            catch (error) {
                throw error;
            }
        });
    }
    createItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.validateItemInputData(item);
                const id = Idhandle_1.default.generate();
                const data = new ItemModel_1.default(id, item.name, item.b_price, item.s_price, item.stock, item.category, item.description);
                yield this.db.createItem(data);
                const itemslist = yield this.db.getItems();
                return itemslist;
            }
            catch (error) {
                throw error;
            }
        });
    }
    ;
    updateItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!item.id)
                    throw new ErrorModel_1.default("Invalid id", "Id not found", ErrorModel_1.HttpCodes.BAD_REQUEST, false);
                this.validateItemInputData(item);
                yield this.db.updateItem(item);
                return yield this.getItem();
            }
            catch (error) {
                throw error;
            }
        });
    }
    ;
    deleteItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!item.id)
                    throw new ErrorModel_1.default("Invalid id", "Id not found", ErrorModel_1.HttpCodes.BAD_REQUEST, false);
                yield this.db.deleteItem(item);
            }
            catch (error) {
                throw error;
            }
        });
    }
    ;
}
exports.default = ItemBusiness;
