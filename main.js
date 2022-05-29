const express = require('express');
const path = require('path');
const moment = require('moment');
const app = express();


const logger = module.require('./logger')
    //app.use(logger); //initialize middleware

app.use('/api/members', require('./routes/api/members'));
//set static folder
// app.use(express.static(path.join(__dirname, 'public')));       // goto any file
const Port = process.env.Port || 5000;
app.listen(Port, () => console.log(`Server connected to port: ${Port}`))