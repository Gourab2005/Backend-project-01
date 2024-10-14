import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})) // configuring json form data which was submitted 
app.use(express.urlencoded({extended:true,limit:"16kb"})) // getting data from url
app.use(express.static("public")) // sometimes we want to srore some files in our server , so here public folder we are using
app.use(cookieParser())


export {app}