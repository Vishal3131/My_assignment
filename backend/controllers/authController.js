
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Maulkar#9090@1';

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const user = await userModel.findUserByEmail(email);

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token,res });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { loginUser };

