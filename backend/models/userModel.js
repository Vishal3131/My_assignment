// models/userModel.js
const db = require('../config/db.config');

// Create User
async function createUser(user) {
    const [result] = await db.execute(
        'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
        [user.name, user.email, user.password]
    );
    return result;
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

module.exports = { createUser, getUsers, updateUser, deleteUser };
