var express = require('express');
var app = express();
var Twit = require('twit');

var twi = new Twit({
		consumer_key: 		'FAmfLdDQXRNpXwCyNz73O3C0X',
		consumer_secret: 	'2rcGSjL05lFSfnqn58X9KgKv777vSdj1YfjOXlb2oJGVglBywy',
		access_token: 		'3181870612-zr0lY7Kt7jmOyUrpVYI0tVkY4f8BAlm2SfQLfJW',
		access_token_secret: '3181870612-zr0lY7Kt7jmOyUrpVYI0tVkY4f8BAlm2SfQLfJW'  
	});



app.get('/', function(req, res) {
	res.sendfile('js/test.html');
});

app.listen(80);