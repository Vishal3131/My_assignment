// models/categoryModel.js
const db = require('../config/db.config');

// Create a new category
async function createCategory(category) {
    const [result] = await db.execute(
        'INSERT INTO category (categoryname, image, status, sequence) VALUES (?, ?, ?, ?)',
        [category.categoryname, category.image, category.status, category.sequence]
    );
    return result;
}

// Get all categories
async function getAllCategories() {
    const [rows] = await db.execute('SELECT * FROM category');
    return rows;
}

// Get a category by ID
async function getCategoryById(id) {
    const [rows] = await db.execute('SELECT * FROM category WHERE id = ?', [id]);
    return rows[0];
}

// Update a category
async function updateCategory(id, category) {
    const [result] = await db.execute(
        'UPDATE category SET categoryname = ?, image = ?, status = ?, sequence = ? WHERE id = ?',
        [category.categoryname, category.image, category.status, category.sequence, id]
    );
    return result;
}

// Delete a category
async function deleteCategory(id) {
    const [result] = await db.execute('DELETE FROM category WHERE id = ?', [id]);
    return result;
}

module.exports = { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory };