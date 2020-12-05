/*---------Google Maps API Embed calls set on click--*/

const nyfood = document.getElementById("nyfood");
nyfood.addEventListener("click", function() {
    document.getElementById("newYork").setAttribute("src", 
   "https://www.google.com/maps/embed/v1/search?q=restaurants+near+Manhattan,+New+York,+NY,+USA&key=AIzaSyANvu2QE7pazETJVRzBRoUVgFm9hQJ3zYU");
        });
           
const nydo = document.getElementById("nydo");
nydo.addEventListener("click", function() {
    document.getElementById("newYork").setAttribute("src", 
    "https://www.google.com/maps/embed/v1/streetview?location=40.7580,-73.9855&key=AIzaSyANvu2QE7pazETJVRzBRoUVgFm9hQJ3zYU");
        });

const nystay = document.getElementById("nystay");
nystay.addEventListener("click", function() {
    document.getElementById("newYork").setAttribute("src", 
    "https://www.google.com/maps/embed/v1/search?q=hotels+near+Manhattan,+New+York,+NY,+USA&key=AIzaSyANvu2QE7pazETJVRzBRoUVgFm9hQJ3zYU");
        });

