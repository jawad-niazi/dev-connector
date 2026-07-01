import {mongoose} from "mongoose"

const conectDb= async ()=>{
    try{
        await mongoose.connect(process.env.mongoURI)
     
        console.log("Mongodb Connected")

    }catch(eror){
     console.log("The error is"+eror)
    }

}

export default  conectDb;