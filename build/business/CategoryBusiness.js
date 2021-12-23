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
const Idhandle_1 = __importDefault(require("../services/Idhandle"));
class CategoryBusiness {
    constructor(db, itemDb) {
        this.db = db;
        this.itemDb = itemDb;
    }
    getCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryList = yield this.db.getCategory();
                return categoryList;
            }
            catch (error) {
                if (error.httpCode) {
                    throw error;
                }
                else {
                    throw new ErrorModel_1.default("API error", "Internal server error", ErrorModel_1.HttpCodes.INTERNAL_SERVER_ERROR, true);
                }
            }
        });
    }
    ;
    createCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!category.name)
                    throw new ErrorModel_1.default('invalid name', 'name required', ErrorModel_1.HttpCodes.BAD_REQUEST, false);
                const id = Idhandle_1.default.generate();
                yield this.db.createCategory({ id: id, name: category.name });
                const categoryList = yield this.db.getCategory();
                return categoryList;
            }
            catch (error) {
                if (error.httpCode) {
                    throw error;
                }
                else {
                    throw new ErrorModel_1.default("API error", "Internal server error", ErrorModel_1.HttpCodes.INTERNAL_SERVER_ERROR, true);
                }
            }
        });
    }
    ;
    updateCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!category.name)
                    throw new ErrorModel_1.default('invalid name', 'name required', ErrorModel_1.HttpCodes.BAD_REQUEST, false);
                yield this.db.updateCategory({ id: category.id, name: category.name });
                const categoryList = yield this.db.getCategory();
                return categoryList;
            }
            catch (error) {
                if (error.httpCode) {
                    throw error;
                }
                else {
                    throw new ErrorModel_1.default("API error", "Internal server error", ErrorModel_1.HttpCodes.INTERNAL_SERVER_ERROR, true);
                }
            }
        });
    }
    ;
    deleteCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!category.id)
                    throw new ErrorModel_1.default('invalid id', 'id required', ErrorModel_1.HttpCodes.BAD_REQUEST, false);
                if (!category.name)
                    throw new ErrorModel_1.default('invalid name', 'name required', ErrorModel_1.HttpCodes.BAD_REQUEST, false);
                yield this.itemDb.updateItemsCategory(category);
                yield this.db.deleteCategory({ id: category.id, name: category.name });
                const categoryList = yield this.db.getCategory();
                return categoryList;
            }
            catch (error) {
                if (error.httpCode) {
                    throw error;
                }
                else {
                    throw new ErrorModel_1.default("API error", "Internal server error", ErrorModel_1.HttpCodes.INTERNAL_SERVER_ERROR, true);
                }
            }
        });
    }
    ;
}
exports.default = CategoryBusiness;
