//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app=express();
const port=3006;

const __dirname=dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded ({ extended: true }));

var usercheck=false;

function verfiy(req,res,next){
    const xx =req.body["password"]
    if  ( xx ==="ILoveProgramming"){
        usercheck =true;
        }
    next();
    }
app.use(verfiy);

app.get("/" ,(req,res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check" ,(req,res) => {
    if(usercheck){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port,()=>{
    console.log(`port listening to ${port}`);
});