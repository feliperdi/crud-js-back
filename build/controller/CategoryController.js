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
const CategoryBusiness_1 = __importDefault(require("../business/CategoryBusiness"));
const CategoryDb_1 = __importDefault(require("../database/CategoryDb"));
const ItemDb_1 = __importDefault(require("../database/ItemDb"));
const categoryBusiness = new CategoryBusiness_1.default(new CategoryDb_1.default(), new ItemDb_1.default());
class CategoryController {
    getCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield categoryBusiness.getCategory();
                res.status(200).send(data);
            }
            catch (error) {
                res.status(error.httpCode).send(error.message);
            }
        });
    }
    ;
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = {
                    id: req.body.id,
                    name: req.body.name
                };
                const data = yield categoryBusiness.createCategory(category);
                res.status(200).send(data);
            }
            catch (error) {
                res.status(error.httpCode).send(error.message);
            }
        });
    }
    ;
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = {
                    id: req.body.id,
                    name: req.body.name
                };
                const data = yield categoryBusiness.updateCategory(category);
                res.status(200).send(data);
            }
            catch (error) {
                res.status(error.httpCode).send(error.message);
            }
        });
    }
    ;
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = {
                    id: req.body.id,
                    name: req.body.name
                };
                const data = yield categoryBusiness.deleteCategory(category);
                res.status(200).send(data);
            }
            catch (error) {
                res.status(error.httpCode).send(error.message);
            }
        });
    }
    ;
}
exports.default = CategoryController;
