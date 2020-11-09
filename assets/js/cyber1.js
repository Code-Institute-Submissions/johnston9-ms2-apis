
/*function fetchdata(coin) {
let dataDiv = document.getElementById("data")
//let dataCoin = document.getElementById("coin-data")  
let url = "https://api.coingecko.com/api/v3"
let qstring = "/simple/price?ids=" + ${coin} + "&vs_currencies=USD"
fetch(url + qstring)
 .then(response => response.json())
 .then(function(resp) {dataDiv.innerHTML = resp[coin].usd
  return resp})
 .then(function(resp) {console.log(resp[coin].usd)})
}
 
 //fetchdata("bitcoin")*/

 
/*function fetchdata(coin) {
    //$("#data").html("");
    var coin = $("#coin").val();
    //console.log(coin)
let dataDiv = document.getElementById("data")
//let dataCoin = document.getElementById("coin-data")  
let url = `https://api.coingecko.com/api/v3`
let qstring = `/simple/price?ids=${coin}&vs_currencies=USD`
fetch(url + qstring)
 .then(response => response.json())
 .then(function(resp) {dataDiv.innerHTML = resp
  return resp})
 .then(function(resp) {console.log(resp)})
}*/
//fetchdata("bitcoin")

/*...........query....*/
 $(document).ready(function() { 
     function fetchdata(event) {
    $("#data").html("");
    var coin = $("#coin").val();

    /*$("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);*/

    $.when(
           $.getJSON(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=USD`),
    ).then(
        function(response) {
            var userData = response;
            $("#data").html(userData);
        },
        /*function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(
                    `<h2>No info found for user ${username}</h2>`);
            }  else if
             (errorResponse.status === 403) {
                var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000);
                $("#gh-user-data").html(`<h4>Too many requests, please wait until ${resetTime.toLocaleTimeString()}</h4>`);
            } else {
                console.log(errorResponse);
                $("#data").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }*/
        
)}
});

//$(document).ready(fetchGitHubInformation);

 
 


 /*function coinbase() {
   let dataDiv = document.getElementById("data")
    fetch('https://coinbase.com/api/v1/prices/buy')
    .then(response => response.json())
 .then(function(resp) {dataDiv.innerHTML = resp
  return resp})
 .then(function(resp) {console.log(resp)})
 }
     coinbase()*/
    




  
  
//fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD")
 //.then(resp => $('#data').html(resp) )
 //.then(resp => dataDiv.textContent(resp))
  //.catch(err => console.log('Request Failed', err))  
/*$.when(
$.getJSON("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"))
    .then(response => console.log(response)) 
    .then(function(response) {
            $("#data").html(response);})*/
 
/*let response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD");
if (response.ok) { 
  let result = await response.json();
} else {
  alert("HTTP-Error: " + response.status);}
  console.log(result)*/




