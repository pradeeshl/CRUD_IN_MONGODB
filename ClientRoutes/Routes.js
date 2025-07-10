import express from "express";
const router = express.Router();
import {addProduct,getAllProducts,getProductById,updateProduct,deleteProduct   } from "../ClientController/Client.js";

// Routes
router.post('/add-product',addProduct);
router.get('/products',getAllProducts);
router.get('/product/:id',getProductById);
router.post('/update-product/:id',updateProduct);
router.delete('/delete-product/:id',deleteProduct);

export default router
