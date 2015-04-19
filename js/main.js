function initialize() {
    var address = (document.getElementById('searchLocation'));
    var autocomplete = new google.maps.places.Autocomplete(address);
    autocomplete.setTypes(['geocode']);
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

    var address = '';
    if (place.address_components) {
        address = [ (place.address_components[0] && place.address_components[0].short_name || ''),
            		(place.address_components[1] && place.address_components[1].short_name || ''),
            		(place.address_components[2] && place.address_components[2].short_name || '') ].join(' ');
     }
  	});
}

google.maps.event.addDomListener(window, 'load', initialize);


function geoLocate() {
	var map;

	function initialize() {
	  var mapOptions = {
	    zoom: 6
	  };
	  map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);

	  // Try HTML5 geolocation
	  if(navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	      var pos = new google.maps.LatLng(position.coords.latitude,
	                                       position.coords.longitude);

	      var infowindow = new google.maps.InfoWindow({
	        map: map,
	        position: pos,
	        content: 'Location found using HTML5.'
	      });

	      map.setCenter(pos);
	    }, function() {
	      handleNoGeolocation(true);
	    });
	  } else {
	    // Browser doesn't support Geolocation
	    handleNoGeolocation(false);
	  }
	}

	function handleNoGeolocation(errorFlag) {
	  if (errorFlag) {
	    var content = 'Error: The Geolocation service failed.';
	  } else {
	    var content = 'Error: Your browser doesn\'t support geolocation.';
	  }

	  var options = {
	    map: map,
	    position: new google.maps.LatLng(60, 105),
	    content: content
	  };

	  var infowindow = new google.maps.InfoWindow(options);
	  map.setCenter(options.position);
	}

	google.maps.event.addDomListener(window, 'load', initialize);
}

function generateLocation() {
	var address = document.getElementById('searchLocation').value;
	if (address.length == 0 || address == null) {
		alert("Missing location.");
		geoLocate();
		$('#map-canvas').css('display', 'block');
		return true;
	}
	else {
		var web_src = 'https://www.google.com/maps/embed/v1/place?q=' + address + '&key=AIzaSyD_mCSJ1FdbeNstkw6nPoHp5RIJFgOpCGw';
    	document.getElementById("map-canvas").innerHTML = '<iframe width="400" height="500" frameborder="0" style="border:0" src="' + web_src + '"></iframe>';
	}
}


function generateLat() {
    geocoder = new google.maps.Geocoder();
    var address = document.getElementById("searchLocation").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      	// alert("Latitude: " +   results[0].geometry.location.lat());
      }

      else {
      	return 2;
      }
    });
}

function generateLng() {
    geocoder = new google.maps.Geocoder();
    var address = document.getElementById("searchLocation").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      	// alert("Latitude: " + results[0].geometry.location.lng());
      }

      else {
      	return 2;
      }
    });
}

function codeAddress() {
    geocoder = new google.maps.Geocoder();
    var address = document.getElementById("searchLocation").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {

      alert("Latitude: "+results[0].geometry.location.lat());
      alert("Longitude: "+results[0].geometry.location.lng());
      }
 
      else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

function execute(callit) {
	
	
	// document.getElementById("long-i").value = 5;
	// document.getElementById("lat-i").value =2;
	// document.submission.lat.value = generateLat();
	// document.submission.lng.value = generateLng();
	// var temp1 = generateLng();
	// var temp2 = generateLat();

	// alert(temp1 + " : " + temp2);
	alert("help?");
	var temp = document.getElementById('searchLocation').value;
	alert(temp);
      // document.getElementById('lat').value = results[0].geometry.location.lng();
      // document.getElementById('lng').value = results[0].geometry.location.lng();

	codeAddress();
	callit();
	 // return true;
	// document.getElementById('submission').submit();
}
// function get_tweets(dies, loc){

// 	geocoder = new google.maps.Geocoder();
// 	var lat;
// 	var lon;
// 	geocoder.geocode( { address: loc}, function(results, status) {
// 		if(status === google.maps.GeocoderStatus.OK) {
// 			lat = results[0].geometry.location.lat();
// 			lon = results[0].geometry.location.lng();
// 		} else {
// 			alert("DANGER DANGER ERROR ERROR");
// 		}
// 	}
// 	var url = "https://api.twitter.com/1.1/search/tweets.json?q=" + die +
// 				"&geo=" + lat + "," + lon + "2mi" + "&count=100";
// 	var tw_ids = [];
// 	$.get(url, function(tweets_json){
// 		var tweets = JSON.parse(tweets_json);
// 		for(obj in tweets.statuses){
// 		tw_ids.push(tweets.statuses[obj].id_str);
// 	}
// 		console.log(tw_ids);
// 	});
// }
