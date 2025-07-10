import mongoose from "mongoose";
mongoose.connect('mongodb+srv://PRADEESH:l.sampradeesh@praticedb.2ku6lgg.mongodb.net/?retryWrites=true&w=majority&appName=PraticeDB')
.then(()=>{
    console.log("connected to database")
})
.catch(()=>{
    console.log("DB is not connected")
})

export default mongoose