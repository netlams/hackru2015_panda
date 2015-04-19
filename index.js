var express = require('express');
var app = express();
var Twit = require('twit');
var bodyParser = require('body-parser');

var twi = new Twit({
		consumer_key: 		'FAmfLdDQXRNpXwCyNz73O3C0X',
		consumer_secret: 	'2rcGSjL05lFSfnqn58X9KgKv777vSdj1YfjOXlb2oJGVglBywy',
		access_token: 		'3181870612-zr0lY7Kt7jmOyUrpVYI0tVkY4f8BAlm2SfQLfJW',
		access_token_secret: 'za8PWrY72Jb60JIp7BbxjInVGsLYT2gYUKKpZnp83PS6q'  
	});

app.use(bodyParser.urlencoded({
	extended:true
}));

app.post('/', function(req, res) {
	twi.get('search/tweets', {  q: req.body.search,
	                            geocode: "40.0047528,-75.1180329,2mi",
	                            count: 10 
	                        },
	            function(err, data){
					console.log(req.body.search);                 
					console.log(data);
					for(var i=0; i<data.statuses.length; i++){
						console.log(data.statuses.id_str);
	                }             
	             }
	        );
});

app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.listen(80);