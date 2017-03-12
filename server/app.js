const dotenv = require('dotenv');
const express = require('express');
const app = express();
const path = require('path');
const portDecision = process.env.PORT || 9003;

app.listen(portDecision, function(){
  console.log('I am listening on', portDecision);
});

app.get('/', function(req,res){
  res.send('Hello World');
});
