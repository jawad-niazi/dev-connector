import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    password:{
        type:String,
        required:true
    },
    avtar:{
        type:String
    }
})

const User=mongoose.model("user",userSchema);

export default User;
