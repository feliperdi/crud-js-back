import express, { Router } from  'express';
import CategoryController from '../controller/CategoryController';


const categoryRouter = express.Router();
const categoryController = new CategoryController();

categoryRouter.get('/category', categoryController.getCategory);
categoryRouter.post('/category', categoryController.createCategory);
categoryRouter.put('/category', categoryController.updateCategory);
categoryRouter.delete('/category', categoryController.deleteCategory);


export default categoryRouter;