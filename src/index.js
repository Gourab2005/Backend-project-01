// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000 , ()=>{
        console.log(`Server is runnig at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongo db connection failed",err);
})





/*
 Approach 1 (writing db code in index directly)
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import {express} from "express"
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("app not able to talk to db", (error)=>{
            console.log("Error: ",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error",error)
        throw error
    }
})()
*/