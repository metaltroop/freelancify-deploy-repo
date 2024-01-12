// auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const allowedEmails = ['ABC@gmail.com', 'freelancifysphere2023@gmail.com', 'freeelancer2023@gmail.com'];

const ensureAuthenticated1 = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ message: 'Unauthorized person' });
  }

  try {
    // Validation of jwtToken
    const decoded = jwt.verify(authHeader, process.env.JWT_SECRET, { expiresIn: 2592000000 });
    req.userInfo = decoded;

    if (!decoded) {
      return res.status(401).json({ message: 'Token is not correct or expired' });
    }

    // Check if the email is in the allowed list
    if (!allowedEmails.includes(decoded.email)) {
      return res.status(403).json({ message: 'Access denied for this email address' });
    }
    next();
  } catch {
    return res.status(401).json({ message: 'Token is not correct or expired' });
  }
};

module.exports = ensureAuthenticated1;
