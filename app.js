
import chalk from 'chalk';
//const express =  require('express');
//const chalk = require('chalk')
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();

//we need to change up how __dirname is used for ES6 purposes
const __dirname = path.dirname(fileURLToPath(import.meta.url));
//now please load my static html and css files for my express app, from my /dist directory
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname ,'public')));

const port = process.env.port || 4000;

// Visit counter
app.get('/visit', (req, res) => {
    const pageName = req.query.page || 'default';
    const filename = `visit-${pageName}.json`; // แก้ชื่อไฟล์ด้วย
    const filepath = path.join(__dirname, filename);

    let current = 0;
    try {
        const data = fs.readFileSync(filepath, 'utf8');
        const json = JSON.parse(data);
        current = json.totalVisits || 0;
    } catch (err) {
        current = 0;
    }
    // เพิ่มจำนวน
    const updated = current + 1;
    fs.writeFileSync(filepath, JSON.stringify({ totalVisits: updated }));

    res.json({ totalVisits: updated });
});


app.listen(port,()=>{
    console.log("Listening on port " + chalk.green(port));
    
})
