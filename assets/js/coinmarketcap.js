let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info",
//listings/latest"
//quotes/latest"

qString= "?CMC_PRO_API_KEY=38158a11-2401-4362-8de7-e3be6952b8b4"
//+ "&symbol=BTC"
//+ "&start=1&limit=5&convert=USD"
//+ "&symbol=BTC"
//+ "&symbol=BTC&convert=BTC"
fetch(url + qString)
.then(response => response.json())
 .then(resp => console.log(resp.data)) 
  .catch(err => console.log('Request Failed', err))  

$.getJSON("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    .then(function(response) {
            $("#gh-user-data").html(response);   },



 /*...or
let response = await fetch(url);
if (response.ok) { 
  let result = await response.json();
} else {
  alert("HTTP-Error: " + response.status);}...*/



