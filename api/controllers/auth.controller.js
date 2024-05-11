import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'

export  const signup = async(req,res,next)=>{
    

   console.log( req.body)
   const {username,email,password} = req.body;
   const hashedPassword = bcryptjs.hashSync(password,10);

   const newUser = new User({username,email,password:hashedPassword});
   try {
       await newUser.save()
       res.status(200).json(
           'User created successfully'
       )
       
   } catch (error) {
    next(error)
    // res.status(500).json(error.message)
   }
}




export  const signin = async(req,res,next)=>{
   console.log( req.body)
   const {email,password} = req.body;
   const hashedPassword = bcryptjs.hashSync(password,10);

   try {
       const validUser = await User.findOne(({email}))
       if (!validUser) {
        return next(errorHandler(404,"User not found!"))
    }
    const validPassword = bcryptjs.compareSync(password,validUser.password);
    if(!validPassword) return  next(errorHandler(401,"Wrong credentials!"))

    const {password:pass, ...rest} = validUser._doc
    const token =  jwt.sign({id:validUser._id}, process.env.JWT_SECRET)
    res.cookie('access_token', token,{httpOnly:true}).status(200).json(rest) 
   } catch (error) {
    next(error)
    // res.status(500).json(error.message)
   }
}