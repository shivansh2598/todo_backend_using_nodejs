const express = require('express');
const app= express();
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
// const logger=require('morgan');
const config=require('./helpers/config')
const routepath=require('./routes/routes')

//for server side static rendering
const path = require('path');


//MongoDb Connections
mongoose.connect(config.url);

mongoose.connection.once('open', function () {
  console.log("Database connection opened");
});

mongoose.connection.on('error', function (error) {
  console.log("Database connection error %s", error);
});

//
mongoose.connection.on('reconnected', function() {
  console.log("Database reconnected");
});
//
mongoose.connection.on('disconnected', function() {
  console.log("Database disconnected");
  mongoose.connect(config.url);
});


//middleware
// app.use(logger());
app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended:false }))

//for server side static rendering
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use('/',routepath);

app.listen(config.port);