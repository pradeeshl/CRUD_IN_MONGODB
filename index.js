import express, { Router } from "express"
import db from "./db.js"
import router from "./ClientRoutes/Routes.js";
const app=express();
app.use(express.json())
app.use('/api',router); 
app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.listen(3000,(req,res)=>{
    console.log("server is running")
})