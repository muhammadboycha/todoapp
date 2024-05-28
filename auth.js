const jwt = require('jsonwebtoken');
const myTokeKey = 'myTokeKey';

const authenticateToken = (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access denied. No token provided.",
            code: "NO_TOKEN"
        });
    }

    try {
        const decoded = jwt.verify(token, myTokeKey);
        req.user = decoded.user; // Attach the decoded user data to the request object
        next();
    } catch (e) {
        if (e.name === 'TokenExpiredError') {
            res.status(401).json({
                success: false,
                message: "Token has expired",
                code: "TOKEN_EXPIRED"
            });
        } else {
            res.status(400).json({
                success: false,
                message: e.message
            });
        }
    }
};

module.exports = authenticateToken;
