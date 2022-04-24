import express from "express";
import { getProducts, addProduct, updateProduct, getProductById, deleteProduct } from "../controller/productController.js";

const router = express.Router();

router.get('/', getProducts); // get all products
router.get('/:id', getProductById); // get one product by id
router.post('/', addProduct); // add product
router.patch('/:id', updateProduct); // update product
router.delete('/:id', deleteProduct); // update product

export default router;