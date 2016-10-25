var express = require('express');
var app = express();
var ip= require('os').networkInterfaces();
app.listen(process.env.PORT);
app. get('/whoami', function(req,res){
       var ipaddress = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
       var info = {
           'ipaddress': ipaddress,
           'language': req.headers["accept-language"].split(',')[0],
           'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
       };
       res.send(info);


});

