import express, { json }  from "express";
import http from "http";
import handleDB from "./connection";
import cors from "cors";

import {listCloth} from './routes/Listproduct/Fashion'
import bodyParser from "body-parser";

async function server(){

const app = express();
const httpserver = http.createServer(app);
const PORT = Number(process.env.PORT) || 8000;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use( cors({
    origin: "*", // Specify the origin you want to allow
    methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"], // Specify the methods you want to allow
    allowedHeaders: "*", // Specify the headers you want to allow
  }))

// Db Connection
handleDB('mongodb://127.0.0.1:27017/egrandmall');



app.get('/api', (req, res) => {res.send("Welcome to egrandmart")});


app.use('/',listCloth); 



httpserver.listen(PORT,()=>console.log(`server listening on ${PORT}`));



}

server();



