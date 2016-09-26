var express = require('express');
var app = express();


app.get('/', function (req, res) {
  var result = {
    ipadress: req.headers['x-forwarded-for'],
    language: req.headers['accept-language'].split(',')[0],
    software: /\((.*)\)/.exec(req.headers['user-agent'])[1]
  }
  res.writeHead(200,{'Content-Type': 'application/json'});
  res.end(JSON.stringify(result));

});

app.listen(process.env.PORT || 8080);
