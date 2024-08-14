import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authroutes.js"
import messageRoutes from "./routes/messageroutes.js"
import userRoutes from "./routes/userroutes.js"
import connectToMongodb from "./DB/connectToMongodb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";


const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());  //parse incoming request with json payloads
app.use(cors());       //there were some problems fetching from localhost so had to add cors
app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)


// app.get("/", (req, res)=>{
//    res.send("hello world");
// });


server.listen(PORT,() => {
    connectToMongodb();
    console.log(`Server is running on port ${PORT}`);

});