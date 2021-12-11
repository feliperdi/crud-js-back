"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ItemController_1 = __importDefault(require("../controller/ItemController"));
const router = express_1.default.Router();
const itemController = new ItemController_1.default();
router.get("/", itemController.getItem);
router.post("/", itemController.createItem);
router.put("/", itemController.updateItem);
router.delete("/", itemController.deleteItem);
exports.default = router;
