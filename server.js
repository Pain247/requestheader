var express = require('express');
var app = express();
var ip= require('os').networkInterfaces();
app.listen(process.env.PORT);
app. get('/whoami', function(req,res){
       var ipaddress = getIP();
       var info = {
           'ipaddress': ipaddress,
           'language': req.headers["accept-language"].split(',')[0],
           'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
       };
       res.send(info);


});
function getIP() {
    for (var comp in ip) {
       var temp = ip[comp];
    for (var j = 0; j < temp.length; j++) {
      var a = temp[j];
      if (a.family === 'IPv4' && a.address !== '127.0.0.1' && !a.internal)
        return a.address;
    }
  }

  return '0.0.0.0';
}
