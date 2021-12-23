"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CategoryController_1 = __importDefault(require("../controller/CategoryController"));
const categoryRouter = express_1.default.Router();
const categoryController = new CategoryController_1.default();
categoryRouter.get('/category', categoryController.getCategory);
categoryRouter.post('/category', categoryController.createCategory);
categoryRouter.put('/category', categoryController.updateCategory);
categoryRouter.delete('/category', categoryController.deleteCategory);
exports.default = categoryRouter;
