function generateLocation() {
	var address = document.getElementById('searchLocation').value;
	if (address.length == 0 || address == null) {
		alert("need to input location");
		return false;
	}
	else {
		var web_src = 'https://www.google.com/maps/embed/v1/place?q=' + address + '&key=AIzaSyD_mCSJ1FdbeNstkw6nPoHp5RIJFgOpCGw';
    	document.getElementById("map-canvas").innerHTML = '<iframe width="400" height="500" frameborder="0" style="border:0" src="' + web_src + '"></iframe>';
	}
}

// function get_tweets(die, loc, count){

// 	navigator.geolocation.getCurrentPosition(function(pos){

// 		var lat = pos.coords.latitude;
// 		var lon = pos.coords.longitude;

// 		var url = "https://api.twitter.com/1.1/search/tweets.json?q=" + die +
// 					"&geo=" + lat + "," + lon + "2mi" + "&count=100";

// 		var tw_ids = [];

// 		$.get(url, function(tweets){
// 			for(id_num in tweets.statuses.);
// 		})

// }