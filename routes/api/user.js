import express from "express"
import {body,validationResult} from "express-validator"
import User from "../../models/user.js";
import gravatar from "gravatar"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router=express.Router();



const registerValidation=[
    body('name').notEmpty().withMessage("please enter your name"),
    body('email')
    .isEmail().withMessage("please enter valid email")
    .normalizeEmail(),
    body("password")
    .isLength({min:6}).withMessage("minimum length for password is 6")
]

router.post("/",registerValidation, 
  async (req,res)=>{
    //ic ma validation lga rha hain ka email sahi ha password or username empty tu nhi
    const err=validationResult(req);
    if(!err.isEmpty()){
       return res.status(400).json(err.array())
    }
     try{const {name,email,password}=req.body
     //checking if user already exist
    let user= await User.findOne({email})
    if (user){
        return res.status(400).json({err:[{msg:"user alreay exist"}]})
    }

    //now avtar turn 
    
    const avatar= gravatar.url(email,{
      s:"200",
      r:"pg",
      d:"mm"
    })

    user =new User({
       name,email,avatar,password  
    })
  
    const salt=await bcrypt.genSalt(10)
    user.password=await bcrypt.hash(password,salt)

    await user.save();

    const payLoad={
     user: {
         id:user.id
      }
    }

    jwt.sign(payLoad, "mySecret123",{expiresIn:36000},(err,token)=>{
                   if(err) throw err
                    console.log(token)
                   res.json({token})
    } )
   
    res.send("user is registered")
    console.log("user is registered")}
    catch(err){
       console.log(err.message)
       res.status(500).json("sever Error")
    }
    
})

export default router;