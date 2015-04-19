
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendfile('js/test.html');
});

app.listen(80);