
import chalk from 'chalk';
//const express =  require('express');
//const chalk = require('chalk')
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();

//we need to change up how __dirname is used for ES6 purposes
const __dirname = path.dirname(fileURLToPath(import.meta.url));
//now please load my static html and css files for my express app, from my /dist directory
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname ,'public')));

const port = process.env.port || 4000;


app.listen(port,()=>{
    console.log("Listening on port " + chalk.green(port));
    
})