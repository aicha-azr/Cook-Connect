// middleware.js
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const secret = process.env.JWT_SECRET;

export default async function middleware(req, res, next) {
  const cookies = cookie.parse(req.headers.cookie || '');

  const token = cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing Token' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next(); // Call next to pass control to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid Token' });
  }
}
