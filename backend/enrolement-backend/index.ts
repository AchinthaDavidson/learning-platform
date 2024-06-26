import bodyParser from "body-parser";
import  express  from "express";

import * as dotenv from 'dotenv';
import mongoose from "mongoose";
import paymentRouter from "./src/routes/course.route";

dotenv.config();

const cors = require("cors");
const app= express()

app.use(cors());
app.use(bodyParser.json())

app.use(paymentRouter)

const URL:any=process.env.DB_URL;

const options:any= {
  useNewUrlParser: true,
  // useUnifiedTopology: true
};


mongoose.connect(URL,options)

const connection =mongoose.connection;
connection.once("open",()=>{
    console.log("db connect success!");
})

export default app;

app.listen(8071,()=>{
  console.log('Sever is runing on port 8071')
})







    