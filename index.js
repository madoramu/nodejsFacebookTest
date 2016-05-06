var express = require('express');
var http = require('http');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, responce) {
    responce.render('index.html');
});

app.set('/', function(request, responce){
    responce.redirect('/');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('posrt'));
});