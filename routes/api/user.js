import express from "express"

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("user.js")
    console.log("user is runnng")
})

export default router;