var express = require('express');
var app = express();
var Twit = require('twit');
var bodyParser = require('body-parser');

var twi = new Twit({
		consumer_key: 		'FAmfLdDQXRNpXwCyNz73O3C0X',
		consumer_secret: 	'2rcGSjL05lFSfnqn58X9KgKv777vSdj1YfjOXlb2oJGVglBywy',
		access_token: 		'3181870612-zr0lY7Kt7jmOyUrpVYI0tVkY4f8BAlm2SfQLfJW',
		access_token_secret: '3181870612-zr0lY7Kt7jmOyUrpVYI0tVkY4f8BAlm2SfQLfJW'  
	});

app.use(bodyParser.urlencoded({
	extended:true
}));

app.post('/', function(req, res) {
	res.send('lat: ' + req.body.lat);
});

app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.listen(80);