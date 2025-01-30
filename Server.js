const express = require('express');
const mongoose = require('mongoose');
const server = express();
const port = 5000;
const cors=require('cors');
server.use(cors());

const databaseName = "intern"; 
const collectionName = "user";
const dbURI = `mongodb+srv://sandhyas2023ece:xcFXqwV3gu2XmDzc@cluster0.p1b0mt7.mongodb.net/intern?retryWrites=true&w=majority&appName=Cluster0`;

let dbConnected = false; 
let Product; 


mongoose.connect(dbURI)
    .then(() => {
        console.log(`Connected to MongoDB Atlas database: ${databaseName}`);
        dbConnected = true;

        const productSchema = new mongoose.Schema({
            name: { type: String, required: true }, 
            price: { type: Number, required: true } 
        });

        Product = mongoose.model('Product', productSchema, collectionName);
    })
    .catch(err => {
        console.error("Error connecting to MongoDB Atlas:", err);
    });

server.use(express.json());

server.get('/', (req, res) => {
    res.end(dbConnected
        ? "Server is running and connected to MongoDB Atlas"
        : "Server is running in standalone mode");
});

server.get('/product', async (req, res) => {
    if (dbConnected) {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: "Error fetching products", error: err });
        }
    } else {
        res.status(503).json({ message: "Database is not connected" });
    }
});

server.post('/product', async (req, res) => {
    const { name, price } = req.body;

    if (!name || price === undefined) {
        return res.status(400).json({ message: "Both name and price are required" });
    }

    if (dbConnected) {
        try {
            const newProduct = new Product({ name, price });
            const savedProduct = await newProduct.save();
            res.status(201).json({
                message: "Item added successfully",
                product: savedProduct
            });
        } catch (err) {
            res.status(500).json({ message: "Error adding product", error: err });
        }
    } else {
        res.status(503).json({ message: "Database is not connected" });
    }
});


server.put('/product/:id', async (req, res) => {
    const productId = req.params.id;
    const { name, price } = req.body;

    if (!name || price === undefined) {
        return res.status(400).json({ message: "Both name and price are required for update" });
    }

    if (dbConnected) {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                { name, price },
                { new: true, runValidators: true }
            );
            if (updatedProduct) {
                res.json({
                    message: "Product updated successfully",
                    product: updatedProduct
                });
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (err) {
            res.status(500).json({ message: "Error updating product", error: err });
        }
    } else {
        res.status(503).json({ message: "Database is not connected" });
    }
});

server.delete('/product/:id', async (req, res) => {
    const productId = req.params.id;

    if (dbConnected) {
        try {
            const deletedProduct = await Product.findByIdAndDelete(productId);
            if (deletedProduct) {
                res.json({
                    message: "Product deleted successfully",
                    product: deletedProduct
                });
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (err) {
            res.status(500).json({ message: "Error deleting product", error: err });
        }
    } else {
        res.status(503).json({ message: "Database is not connected" });
    }
});
   
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
