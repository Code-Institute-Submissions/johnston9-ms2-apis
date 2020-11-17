document.getElementById("coinfetch").addEventListener("click", fetchdata);

function fetchdata(coin) {
  var coin = $("#coin").val();
  let dataDiv = document.getElementById("coin-data");
  let url = `https://api.coingecko.com/api/v3`;
  let qstring = `/simple/price?ids=${coin}&vs_currencies=USD`;
  fetch(url + qstring)
    .then((response) => response.json())
    .then(function (resp) {
      if (coin === "Bitcoin") {
        dataDiv.innerHTML = resp.bitcoin.usd;
      } else if (coin === "Ethereum") {
        dataDiv.innerHTML = resp.ethereum.usd;
      } else if (coin === "Litecoin") {
        dataDiv.innerHTML = resp.litecoin.usd;
      } else if (coin === "Ripple") {
        dataDiv.innerHTML = resp.ripple.usd;
      } else if (coin === "Chainlink") {
        dataDiv.innerHTML = resp.chainlink.usd;
      } else {
        dataDiv.innerHTML = "Error";
      }
      return resp;
    })

    .catch((error) => {
      console.log("Error:", error);
      dataDiv.innerHTML = "Network Error";
    });
}

document.getElementById("clear").addEventListener("click", cleardata);

function cleardata() {
    let coin1 = document.getElementById("coin");
    let dataDiv = document.getElementById("coin-data");
    coin1.value = ""; 
    dataDiv.innerHTML = ""


    

}







/*...........query....*/
/*$(document).ready(function() { 
     $("#coinfetch").click(function(coin){
     //function fetchdata(coin) {
    $("#coin-data").html("");
    var coin = $("#coin").val();
    $.when(
           $.getJSON(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=USD`),
    ).then(
        function(response) {
            console.log(response.bitcoin.usd)
            $("#coin-data").html(response.bitcoin.usd);},  )}) })*/

/*$("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);*/
/*function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#data").html(
                    `Error`);
            } else {
                console.log(errorResponse);
                $("#data").html(
                    `Try again`);
            }*/

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
