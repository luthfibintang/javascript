import express from "express";
import { getAllProducts, addProduct, getProduct, updateProduct, deleteProduct } from "../controllers/products.js";

const router = express.Router();

router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.post('/', addProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;