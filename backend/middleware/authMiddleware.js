const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  console.log('Authorization Header:', token);

  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const rawToken = token.startsWith('Bearer ') ? token.replace('Bearer ', '') : token;
    const decoded = jwt.verify(rawToken, process.env.JWT_SECRET);
    req.user = decoded;
    console.log('Token verified for user:', decoded.id);
    next();
  } catch (err) {
    console.error('JWT Verification Error:', err.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};


module.exports = authMiddleware;
