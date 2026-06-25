import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:string,
        required:[true,"Name is required"]
    },
    email:{
        type:email,
        required:true
    },
    password:{
        type:string,
        required:true
    },
    avatar:{
      type:string
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const user=mongoose.Model("user",userSchema);

export default user;
