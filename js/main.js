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