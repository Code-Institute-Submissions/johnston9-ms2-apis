/* Function for Map Page to set map, with a marker cluster of 2 markers, "Union Square Apartments" and
   the "NY Stock Exchange" both labeled by their object name value.*/

function initMap() {
	var map = new google.maps.Map(document.getElementById("map1"), {
		zoom: 5,
		center: new google.maps.LatLng(40.706005, -74.008827),
	});

	var locations = [{
			lat: 40.735863,
			lng: -73.991084,
			name: "Union Square Apartments",
		},

		{
			lat: 40.706005,
			lng: -74.008827,
			name: "NY Stock Exchange",
		},
	];

	const markers = locations.map((location) => {
		return new google.maps.Marker({
			position: location,
			label: location.name,
		});
	});

	var markerCluster = new MarkerClusterer(map, markers, {
		imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
	});

	const image =
		"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";


	/*A seperate marker is set for the NYCC to make it stand out, giving it a
	flag icon, a drop Animation, a title to instruct the user to click on the flag
	and an infowindow to open on doing so.*/

	const marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(40.706, -74.0048),
		map: map,
		animation: google.maps.Animation.DROP,
		icon: image,
		title: "NYCC - CLICK HERE",
	});

	const contentString =
		'<div id="content">' +
		'<div id="siteNotice">' +
		"</div>" +
		'<h1 id="firstHeading" class="firstHeading">New York Crypro College</h1>' +
		'<div id="bodyContent">' +
		"<p> Five minutes from the NY Stock Exchange. In the heart of the Finincial District" +
		"</div>" +
		"</div>";

	const infowindow = new google.maps.InfoWindow({
		content: contentString,
	});

	marker1.addListener("click", () => {
		infowindow.open(map, marker1);
	});

}



