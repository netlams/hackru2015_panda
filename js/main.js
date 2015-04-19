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