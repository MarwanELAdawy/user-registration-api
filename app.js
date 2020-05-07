const express = require('express');
const port = 3000;
const db = require('./src/db/db');
const app = express();
const hostname = 'localhost';
app.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});