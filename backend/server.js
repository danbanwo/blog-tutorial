//requaring a module
var express = require('express');
var sequelize = require('sequelize');
var db = require('./db');
var bodyParser = require('body-parser');
//importing router with a instance of express
var router = require('./routes/route-comments')
var app = express();

//imposting all models from the index.js
 require('./models')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
//create a path to catch all routes from the front end.
// app.get('*', function(req, res){
//   res.send()
// })

app.get('/', function(req, res){
  res.send('hello world')
})

app.listen(3000, function(){
  console.log('listening on  port 3000')
})
