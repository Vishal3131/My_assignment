// controllers/categoryController.js
const categoryModel = require('../models/categoryModel');

// Create a new category
async function createCategory(req, res) {
    try {
        const result = await categoryModel.createCategory(req.body);
        res.status(201).json({ message: 'Category created', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get all categories
async function getCategories(req, res) {
    try {
        const categories = await categoryModel.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get a single category by ID
async function getCategoryById(req, res) {
    try {
        const category = await categoryModel.getCategoryById(req.params.id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update a category
async function updateCategory(req, res) {
    try {
        const result = await categoryModel.updateCategory(req.params.id, req.body);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Category updated' });
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Delete a category
async function deleteCategory(req, res) {
    try {
        const result = await categoryModel.deleteCategory(req.params.id);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Category deleted' });
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory };