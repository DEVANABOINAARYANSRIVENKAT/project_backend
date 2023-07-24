const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const user = require('./routes/user');
const csdata = require('./routes/csdata');
const srdata = require('./routes/srdata');

//initilze express.js
const app = express();
//to receive json data
app.use(express.json());
//initilze cors 
app.use(cors({
    origin: '*'
}));

//connect mongobd
mongoose.connect('mongodb+srv://aryandevanaboina:aryan@cluster5.er9h5pa.mongodb.net/codegnandb?retryWrites=true&w=majority').then(
    console.log("Db is connected")
);

//auth api's
app.use('/api/auth', auth);
//users api's
app.use('/api/user', user);
app.use('/api/csdata', csdata);
app.use('/api/srdata', srdata);

//run server
app.listen(5000, () => console.log('server is running'));
