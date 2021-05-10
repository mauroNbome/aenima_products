import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import mongoose from 'mongoose'

// ===================================
// - @desc  Delete one product by ID
// - @route  DELETE /api/products/:id
// - @access  Public
const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params.id
    const product = await Product.findById(id)

    if (product) {
        await product.remove()
        res.json({ message: 'Product removed succesfully' })
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// ===================================
// - @desc  Fetch all products.
// - @route  GET /api/products
// - @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

// ===================================
// - @desc  Fetch a single product.
// - @route  GET /api/products/:id
// - @access  Public
const getProductById = asyncHandler(async (req, res) => {
    const id = req.params.id
    if (mongoose.Types.ObjectId.isValid(id)) {
        // Checking if mongo ID is valid.

        const product = await Product.findById(id)

        if (!product) {
            res.status(404).json({
                ok: false,
                message: 'Product not found'
            })
        } else {
            res.json(product)
        }
    } else {
        res.status(400).json({
            ok: false,
            message:
                'Invalid MongoDB ObjectId. Cannot find matching products with an invalid ObjectId.'
        })
    }
})

// ===================================
// - @desc  Create a product
// - @route  POST /api/products/
// - @access  Public
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample name',
        price: 0,
        image: '/uploads/sample.jpg',
        description: 'Sample description'
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

// ===================================
// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Public
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image } = req.body

    const product = await Product.findById(req.params.id)

    if (product) {
        product.name = name
        product.description = description
        product.price = price
        product.image = image

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

export {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct
}
