import express from "express";
import authToken from "../../middleware/auth.js";
import User from "../../models/user.js";
const router = express.Router();

// 🚨 LOGS KI BARRAGE LAUNCH KAREIN
console.log("=========================================");
console.log("1. TYPE OF AUTH_TOKEN:", typeof authToken);
console.log("2. STRING VALUE OF AUTH_TOKEN:", authToken ? authToken.toString() : "undefined");
console.log("=========================================");

router.get("/", authToken, async(req, res) => {
    try{
 const user=await new User.findByeId(req.user.id).select("-password")
   res.json(user)
    }catch(err){
         res.status(500).send("server error")
    }
});

export default router;