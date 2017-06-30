const router = require('express').Router();
const path = require('path');
const request = require('request-promise');

var jsonToSend = {};
const options = {
    method:'GET',
    uri:'https://api.medium.com/v1/me',
    headers: {
        'Authorization': '2311cc788eed37168ce146ab56e2adf9a8d77eeb870a34005cb3610ec5836de29',
        
    },
    json: true

}
    request(options).then(function(response){
        console.log(response.body)
       var jsonToSend = response;
        // console.log(jsonToSend, 'JSON TO SEND');
    })
    .catch(function (err){
        console.log(err);
    })

    



module.exports = router;