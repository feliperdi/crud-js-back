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
const ItemBusiness_1 = __importDefault(require("../business/ItemBusiness"));
const ItemDb_1 = __importDefault(require("../database/ItemDb"));
class ItemController {
    static createBusiness() {
        return new ItemBusiness_1.default(new ItemDb_1.default());
    }
    getItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const business = ItemController.createBusiness();
                const data = yield business.getItem();
                res.status(200).send(data);
            }
            catch (error) {
                if (error.httpCode) {
                    res.status(error.httpCode).send(error.message);
                }
                else {
                    res.status(500).send("API error");
                }
            }
        });
    }
    createItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const business = ItemController.createBusiness();
                const item = {
                    name: req.body.name,
                    b_price: req.body.b_price,
                    s_price: req.body.s_price,
                    category: req.body.category,
                    stock: req.body.stock,
                    description: req.body.stock
                };
                const data = yield business.createItem(item);
                res.status(200).send(data);
            }
            catch (error) {
                if (error.httpCode) {
                    res.status(error.httpCode).send(error.message);
                }
                else {
                    res.status(500).send("API error");
                }
            }
        });
    }
    updateItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const business = ItemController.createBusiness();
                const item = {
                    id: req.body.id,
                    name: req.body.name,
                    b_price: req.body.b_price,
                    s_price: req.body.s_price,
                    category: req.body.category,
                    stock: req.body.stock,
                    description: req.body.stock
                };
                const data = yield business.updateItem(item);
                res.status(200).send(data);
            }
            catch (error) {
                if (error.httpCode) {
                    res.status(error.httpCode).send(error.message);
                }
                else {
                    res.status(500).send("API error");
                }
            }
        });
    }
    ;
    deleteItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const business = ItemController.createBusiness();
                const item = {
                    id: req.body.id,
                };
                const data = yield business.deleteItem(item);
                res.status(200).send(data);
            }
            catch (error) {
                if (error.httpCode) {
                    res.status(error.httpCode).send(error.message);
                }
                else {
                    res.status(500).send("API error");
                }
            }
        });
    }
    ;
}
exports.default = ItemController;
