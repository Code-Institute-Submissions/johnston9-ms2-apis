function initMap() {
  var map = new google.maps.Map(document.getElementById("map1"), {
    zoom: 5,
    center: new google.maps.LatLng(40.706005, -74.008827),
    /*center: {
      lat: 40.706005,
      lng: -74.008827,
    },*/ 
  });


var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

var locations = [
  {
    lat: 40.735863,
    lng: -73.991084,
    name: "Union Square Apartments"
  },
  /*{
    lat: 40.755678,
    lng: -73.984256,
    name: "Times Square Apartments"
  },*/
  {
    lat: 40.706005,
    lng: -74.008827,
    name: 'NY Stock Exchange'
    
  },
];
     

const markers = locations.map((location, i) => {
  return new google.maps.Marker({
    position: location,
    //label: labels[i % labels.length] 
    label: location.name
    });
});
const marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(40.706000, -74.004800),
    map: map,
    title: "NYCC - CLICK HERE",
  });

  /*.new...*/
  /*.......*/
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
  /*....new...*/


var markerCluster = new MarkerClusterer(map, markers, {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
});}

/*..........new map fron stack tutioial...after writing this markers stoped working...the map still loads>*/

/*function initMap() {
          const mapProp = {
             center: new google.maps.LatLng(41.084045, -73.874256),
             zoom: 5
      }
      var map = new google.maps.Map(document.getElementById("map1"), mapProp)
      }

    var myMarks = [{
                "lat": 40.785091,
                "lng": -73.968285,
                "name": "one",
                "info": "Best in town"
            }, {
                "lat": 41.084045,
                "lng": -73.874256,
                "name": "two",
                "info": "Best in town"
            }, {
                "lat": 40.754932,
                "lng": -73.984016,
                "name": "three",
                "info": "Best in town"
            }]

    for( let i = 0; i < myMarks.length; i++) {
        const marker = new google.maps.Marker(
        {position: new google.maps.latLng(myMarks[i].lat, myMarks[i].lng),
        map: map,
        title: myMarks[i].name})
        marker.setMap(map)}
    

    //initMap()*/
