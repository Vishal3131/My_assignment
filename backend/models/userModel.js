// models/userModel.js
const db = require('../config/db.config');
const bcrypt= require('bcrypt');

// Create User
async function createUser(user) {
    const hashedPassword = await hashPassword(user.password);
    const [result] = await db.execute(
        'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
        [user.name, user.email, hashedPassword]
    );
    return result;
}

// Function to hash a password
async function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

// Find User by Email
async function findUserByEmail(email) {
    const [rows] = await db.execute('SELECT * FROM user WHERE email = ?', [email]);
    return rows[0];
}

// Get Users
async function getUsers() {
    const [rows] = await db.execute('SELECT * FROM user');
    return rows;
}

// Update User
async function updateUser(id, user) {
    const [result] = await db.execute(
        'UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?',
        [user.name, user.email, user.password, id]
    );
    return result;
}

// Delete User
async function deleteUser(id) {
    const [result] = await db.execute('DELETE FROM user WHERE id = ?', [id]);
    return result;
}

module.exports = { createUser, getUsers, updateUser, deleteUser, findUserByEmail };
