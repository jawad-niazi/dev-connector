import express from "express"
import {body,validationResult} from "express-validator"

const router=express.Router();

const registerValidation=[
    body('name').notEmpty().withMessage("please enter your name"),
    body('email')
    .isEmail().withMessage("please enter valid email")
    .normalizeEmail(),
    body("password")
    .isLength({min:6}).withMessage("minimum length for password is 6")
]

router.post("/",registerValidation,(req,res)=>{
    const err=validationResult(req);
    if(!err.isEmpty()){
       return res.status(400).json(err.array())
    }
    
    res.send("user")
    console.log("user is runnng")
})

export default router;