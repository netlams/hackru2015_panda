function generateLocation() {
	var address = document.getElementById('searchLocation').value;
	var web_src = 'https://www.google.com/maps/embed/v1/place?q=' + address + '&key=AIzaSyD_mCSJ1FdbeNstkw6nPoHp5RIJFgOpCGw';
    // <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=1624%20S%20Broad%20St%2C%20Philadelphia%2C%20PA%2C%20United%20States&key=AIzaSyD_mCSJ1FdbeNstkw6nPoHp5RIJFgOpCGw"></iframe>
    document.getElementById("map-canvas").innerHTML = '<iframe width="600" height="450" frameborder="0" style="border:0" src="' + web_src + '"></iframe>';
}


function get() {
	var me = generateLocation();
	alert(me);

}

function get_tweets(dies, loc){

	geocoder = new google.maps.Geocoder();
	var lat;
	var lon;
	geocoder.geocode( { address: loc}, function(results, status) {
		if(status === google.maps.GeocoderStatus.OK) {
			lat = results[0].geometry.location.lat();
			lon = results[0].geometry.location.lng();
		} else {
			alert("DANGER DANGER ERROR ERROR");
		}
	}
	var url = "https://api.twitter.com/1.1/search/tweets.json?q=" + die +
				"&geo=" + lat + "," + lon + "2mi" + "&count=100";
	var tw_ids = [];
	$.get(url, function(tweets_json){
		var tweets = JSON.parse(tweets_json);
		for(obj in tweets.statuses){
		tw_ids.push(tweets.statuses[obj].id_str);
	}
		console.log(tw_ids);
	});
}