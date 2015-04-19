

function get_tweets(die, loc, count){

	navigator.geolocation.getCurrentPosition(function(pos){

		var lat = pos.coords.latitude;
		var lon = pos.coords.longitude;

		var url = "https://api.twitter.com/1.1/search/tweets.json?q=" + die +
					"&geo=" + lat + "," + lon + "2mi" + "&count=100";

		var tw_ids = [];

		$.get(url, function(tweets){
			for(id_num in tweets.statuses.);
		})

}