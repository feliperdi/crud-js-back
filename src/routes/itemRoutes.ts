import express from 'express';
import ItemController from '../controller/ItemController';


const router = express.Router();
const itemController = new ItemController();


router.get("/", itemController.getItem);
router.post("/", itemController.createItem);
router.put("/", itemController.updateItem);
router.delete("/", itemController.deleteItem);

export default router;