import Product from "../models/ProductModel.js"

// Get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Get one Products by id
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.params.id});
        res.json(product)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// insert product
export const addProduct = async (req, res) => {
    try {
        const addproduct = await Product.insertMany(req.body);
        res.status(201).json(addproduct)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// Update product
export const updateProduct = async (req, res) => {
    try {
        const newProduct = await Product.updateOne({_id: req.params.id}, {
            $set: {
                title: req.body.title,
                price: req.body.price
            }
        });
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// Delete Product
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

