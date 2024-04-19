const http = require('http');
const request = require('request');

http.createServer(function (req, res) {
    request('https://catfact.ninja/fact', function (error, response, body) {
        console.error('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        console.log('body:', body); 

        res.write(body); 
        res.end();
        }); 
  }).listen(8080);