import Product from "../models/product.models.js";// Add a product
export const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        console.log(product);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single product
export  const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a product
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            product.title = req.body.title;
            product.description = req.body.description;
            product.price = req.body.price;
            await product.save();
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a product
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (product) {
            res.json(product);
            console.log("deleted");
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
