const jwt = require('jsonwebtoken'); // Import jsonwebtoken library

function auth(role = null) {
    return (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) return res.status(401).json({ msg: 'No token provided' });

        try {
            const secret = process.env.JWT_SECRET || 'supersecretkey';
            const decoded = jwt.verify(token, secret);
            req.user = decoded;
            if (role && decoded.role !== role) {
                return res.status(403).json({ msg: 'Forbidden' });
            }
            next();
        } catch (err) {
            res.status(401).json({ msg: 'Invalid token' });
        }
    };
}

module.exports = auth;
