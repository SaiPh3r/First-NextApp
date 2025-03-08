import mongoose, { connection } from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.mongo_url!);
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log("Mongo db connected successfully");
        });

        connection.on("error",(err)=>{
            console.log(err);
            process.exit();
        })
        
    } catch (error) {
        console.log("Something went wrong!");
        console.log(error);
        
    }
}