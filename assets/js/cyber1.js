document.getElementById("coinfetch").addEventListener("click", fetchdata);

function fetchdata(coin) {
  var coin = $("#coin").val();
  let dataDiv = document.getElementById("coin-data");
  let url = `https://api.coingecko.com/api/v3`;
  let qstring = `/simple/price?ids=${coin}&vs_currencies=USD`;
  fetch(url + qstring)
    .then((response) => response.json())
    .then(function (resp) {
      if (coin === "Bitcoin" || coin === "bitcoin") {
        dataDiv.innerHTML = resp.bitcoin.usd;
      } else if (coin === "Ethereum" || coin === "ethereum") {
        dataDiv.innerHTML = resp.ethereum.usd;
      } else if (coin === "Litecoin" || coin === "litecoin") {
        dataDiv.innerHTML = resp.litecoin.usd;
      } else if (coin === "Ripple" || coin === "ripple") {
        dataDiv.innerHTML = resp.ripple.usd;
      } else if (coin === "Chainlink" || coin === "chainlink") {
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
    let coin = document.getElementById("coin");
    let dataDiv = document.getElementById("coin-data");
    coin.value = ""; 
    dataDiv.innerHTML = ""
}

/*-----------coin fetch 2---------
document.getElementById("coinfetch2").addEventListener("click", fetchdata2);

function fetchdata2(coin2) {
  var coin2 = $("#coin2").val();
  let dataDiv2 = document.getElementById("coin-data2");
  let url = `https://api.coingecko.com/api/v3`;
  let qstring = `/simple/price?ids=${coin2}&vs_currencies=USD&include_24hr_change=true`;
  fetch(url + qstring)
    .then((response) => response.json())
    .then(function (resp) {
      if (coin2 === "Bitcoin" || coin2 === "bitcoin") {
        dataDiv2.innerHTML = resp.bitcoin.usd;
      } else if (coin2 === "Ethereum" || coin2 === "ethereum") {
        dataDiv2.innerHTML = resp.ethereum.usd;
      } else if (coin2 === "Litecoin" || coin2 === "litecoin") {
        dataDiv2.innerHTML = resp.litecoin.usd;
      } else if (coin2 === "Ripple" || coin2 === "ripple") {
        dataDiv2.innerHTML = resp.ripple.usd;
      } else if (coin2 === "Chainlink" || coin2 === "chainlink") {
        dataDiv2.innerHTML = resp.chainlink.usd;
      } else {
        dataDiv2.innerHTML = "Error";
      }
      return resp;
    })

    .catch((error) => {
      console.log("Error:", error);
      dataDiv2.innerHTML = "Network Error";
    });
}

document.getElementById("clear2").addEventListener("click", cleardata2);

function cleardata2() {
    let coin2 = document.getElementById("coin2");
    let dataDiv2 = document.getElementById("coin-data2");
    coin2.value = ""; 
    dataDiv2.innerHTML = ""
}*/








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
