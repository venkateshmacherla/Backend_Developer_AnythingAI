const { users } = require('../dataStore'); // Import users array from dataStore
const jwt = require('jsonwebtoken'); // Import jsonwebtoken library
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

exports.register = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        if (!username || !password) {
            return res.status(400).json({ msg: 'Username and password are required' });
        }

        const exists = users.find(user => user.username === username);
        if (exists) {
            return res.status(400).json({ msg: 'Username already exists' });
        }

        const hashed = await bcrypt.hash(password, 10);
        const user = { id: users.length + 1, username, password: hashed, role: role || 'user' };
        users.push(user);
        res.status(201).json({ msg: 'User registered successfully', user: { id: user.id, username: user.username, role: user.role } });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign(
        { id: user.id, role: user.role },
        "supersecretkey", // replace with env var later if needed
        { expiresIn: '1h' }
    );
    res.json({ token });
};
