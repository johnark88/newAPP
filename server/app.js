const dotenv = require('dotenv');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const portDecision = process.env.PORT || 9003;
const urlencodedParser = bodyParser.urlencoded({extended: false});


//this route serves the index
app.get('/', function(req, res){
  res.sendFile(path.resolve('./public/index.html'));
});

//use public folder
app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(portDecision, function(){
  console.log('I am listening on', portDecision);
});
