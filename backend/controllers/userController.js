// controllers/userController.js
const userModel = require('../models/userModel');

// Create User
async function createUser(req, res) {
    const user = req.body;

    const users = await userModel.getUsers();
    const results=users.filter(d=>d.email===user.email);
       if (results.length === 0) {
         try {  
             const result = await userModel.createUser(user);
             res.status(201).json({ id: result.insertId });
         } catch (error) {
             res.status(500).json({ error: error.message });
         }
         }else{
             res.status(400).send('User already exist !');
             return;
      }
    
 }

// Get Users
async function getUsers(req, res) {
    try {
        const users = await userModel.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update User
async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const user = req.body;
        await userModel.updateUser(id, user);
        res.status(200).json({ message: 'User updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete User
async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        await userModel.deleteUser(id);
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createUser, getUsers, updateUser, deleteUser };