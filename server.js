var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end(JSON.stringify(req.headers)+ ' '+ req.ip);

});

app.listen(process.env.PORT || 8080);
