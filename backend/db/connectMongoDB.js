import mongoose from "mongoose";

const connectMongoDB= async ()=>{
    try {
        const conn =await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB conndeted: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`MongoDB  error occur: ${error.message}`);  
    }
}

export default connectMongoDB;