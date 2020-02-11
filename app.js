var temperature;
var weatherSummary;
var desc;

window.onload = function () {

	temperature = document.getElementById("current-temperature");
	weatherSummary = document.getElementById("weather-summary");
	desc = this.document.getElementById("desc");

}

function farenheitToCelsius(k) {

	return Math.round((k - 32) * 0.5556);

}


var getWeather = function () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var lat = position.coords.latitude;
			var long = position.coords.longitude;
			showWeather(lat, long)
		})
	}
	else {
		window.alert("Could not get location");
	}
}

function showWeather(lat, long) {
	var url = `https://api.darksky.net/forecast/021a3d5cc8d8dc944396422d9f84408c/${lat},${long}` + `?format=jsonp&callback=displayWeather`;
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
	displayWeather(object)
}

var object;

function displayWeather(object) {
	
	weatherSummary.innerHTML = "<p class='smaller'>City:<p>" + object.timezone;
	temperature.innerHTML = farenheitToCelsius(object.currently.temperature) + " C";
	desc.innerHTML = "<p class='smaller'>Weather Description:<p>" + object.currently.summary;

}