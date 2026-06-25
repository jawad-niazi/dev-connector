import express from "express";
import conectDb from "./config/db.js"
import dotenv from "dotenv"
import authRoute from "./routes/api/auth.js";
import postRoute from "./routes/api/post.js"
import profileRoute from "./routes/api/profile.js"
import userRoute from "./routes/api/user.js"

dotenv.config();
conectDb();

const app=express();



const port = process.env.PORT || 5000;

app.get("/",(req,res)=>res.send("api is running"))


app.use("/api/user",userRoute);
app.use("/api/profile",profileRoute);
app.use("/api/post",postRoute)
app.use("/api/auth",authRoute)


app.listen(port,()=>console.log(`app is running on ${port}`))
