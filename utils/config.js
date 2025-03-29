require('dotenv').config();

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

module.exports = { JWT_SECRET };
