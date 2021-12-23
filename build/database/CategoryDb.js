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
class CategoryDb extends BaseDb_1.default {
    constructor() {
        super(...arguments);
        this.table = "category";
    }
    getCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const raw = yield this.getConnection().select("*").into(this.table);
                return raw;
            }
            catch (error) {
                if (error.httpCode)
                    throw error;
                else
                    throw new ErrorModel_1.default("DB error", error.message, 500, true);
            }
            finally {
                yield this.destroyConnection();
            }
        });
    }
    createCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().insert(category).into(this.table);
            }
            catch (error) {
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
    updateCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().update({ name: category.name }).where({ id: category.id }).into(this.table);
            }
            catch (error) {
                if (error.httpCode)
                    throw error;
                else
                    throw new ErrorModel_1.default("DB error", error.message, 500, true);
            }
            finally {
                yield this.destroyConnection();
            }
        });
    }
    deleteCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (category.name === "OTHERS")
                    throw new ErrorModel_1.default("Invalid category", "cannot delete category OTHERS", ErrorModel_1.HttpCodes.BAD_REQUEST, false);
                yield this.getConnection().delete().where({ id: category.id }).into(this.table);
            }
            catch (error) {
                if (error.httpCode)
                    throw error;
                else
                    throw new ErrorModel_1.default("DB error", error.message, 500, true);
            }
            finally {
                yield this.destroyConnection();
            }
        });
    }
}
exports.default = CategoryDb;
