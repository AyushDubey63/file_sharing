import mongoose from "mongoose"
const MONGODB_URL= "mongodb+srv://bhai:bhai2123@cluster0.yritfcs.mongodb.net/?retryWrites=true&w=majority"
const DBConnection = async()=>{
    try {
        await mongoose.connect(MONGODB_URL,{useNewUrlParser:true} )
        console.log("database connected successfully")
    } catch (error) {
        console.log("Error while connecting with the database",error.message)
    }
}

export default DBConnection; 