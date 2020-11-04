
function fetchdata(coin) {
let dataDiv = document.getElementById("data") 
let url = "https://api.coingecko.com/api/v3"
let qstring = "/simple/price?ids=" + coin + "&vs_currencies=USD"
fetch(url + qstring)
 .then(response => response.json())
 .then(function(resp) {dataDiv.innerHTML = resp.bitcoin.usd
  return resp})
 .then(function(resp) {console.log(resp.bitcoin.usd)})}
 
 fetchdata("bitcoin")

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




