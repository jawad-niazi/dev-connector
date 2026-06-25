import express from "express"

const router=express.Router();

router.post("/",(req,res)=>{
    console.log(req.body)
    res.send("user.js")
    console.log("user is runnng")
})

export default router;