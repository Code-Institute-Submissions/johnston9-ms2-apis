 /*function initMap() {
        var map = new google.maps.Map(document.getElementById("map1"), {
          zoom: 3,
          center: {
            lat: 46.619261,
            lng: -33.134766,
          },
        });

        var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 40.785091,
                lng: -73.968285
            }, {
                lat: 41.084045,
                lng: -73.874256
            }, {
                lat: 40.754932,
                lng: -73.984016
            }];

        var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

        var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
      }*/

      /*..........map>*/
      function initMap() {
          const mapProp = {
              center: {
            lat: 46.619261,
            lng: -33.134766,
          },
          /*center: new google.maps.LatLng(41.084045, -73.874256),*/
          zoom: 5
      }
      var map = new google.maps.Map(document.getElementById("map1"), mapProp)
      }

    
      

      /*var myMarks = [{
                lat: 40.785091,
                lng: -73.968285,
                name: "yo"
            }, {
                lat: 41.084045,
                lng: -73.874256,
                name: "yoyo"
            }, {
                lat: 40.754932,
                lng: -73.984016,
                name: "yol"
            }]

    for( let i = 0; i < myMarks.length; i++) {
        const marker = new google.maps.Marker(
        {position: new google.maps.latLng(myMarks[i].lat, myMarks[i].lng),
        map: map,
        title: myMarks[i].name})
        marker.setMap(map)
    }*/

