// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const auth = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
let id = req.user.id;
    
    //search on db 
    const user = await User.findOne({_id: id})
   
if(!user){
  return res.status(400).json({message: "user not found"})
}


    
  } catch {
   return res.status(400).send('Invalid Token');
  }
  


  next();

  
// console.log(req.userEmail);
};
export default auth;