const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Dotenv configuration
const dotenv = require('dotenv')
dotenv.config();

// Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

const port = process.env.PORT;
app.listen(port, ()=> console.log(`Server started on port ${port}`));