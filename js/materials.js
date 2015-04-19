function generateResults() { 
	var query = document.getElementById('searchTerm').value;
	if (generateLocation() == false || query.length == 0 ) {
		alert("Missing search query.");
		return false;
	}
	else {
	$('#map-canvas').css('display', 'block');

	// sets variable source to the animalTemplate id in index.html
	var source = document.getElementById("resultsTemplate").innerHTML;
	 
	// Handlebars compiles the above source into a template
	var template = Handlebars.compile(source);
	 
	// data
	var data = {animals: [
	  {type: "Dog", sound: "woof"},
	  {type: "Cat", sound: "meow"},
	  {type: "Cow", sound: "moo"}
	]};
	 
	// data is passed to above template
	var output = template(data);
	 
	// HTML element with id "animalList" is set to the output above
	document.getElementById("main-content").innerHTML = output;
	}

};