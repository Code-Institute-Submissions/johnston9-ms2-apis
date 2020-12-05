/*-----------fetch calls for Index Page Coin Prices feature---------*/

document.getElementById("coinfetch").addEventListener("click", fetchdata1);

function fetchdata1(coin) {
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

/*---/price call---/

/*---fetch calls for Cryptocurrency Page 24 Hour Change feature---*/

/*document.getElementById("coinfetch2").addEventListener("click", fetchdata2);

function fetchdata2(coin2) {
  var coin2 = $("#coin2").val();
  let dataDiv2 = document.getElementById("coin-data2");
  let url = `https://api.coingecko.com/api/v3`;
  let qstring = `/simple/price?ids=${coin2}&vs_currencies=USD&include_24hr_change=true`;
  fetch(url + qstring)
    .then((response) => response.json())
    .then(function (resp) {
      if (coin2 === "Bitcoin" || coin2 === "bitcoin") {
        dataDiv2.innerHTML = `${(resp.bitcoin.usd_24h_change).toFixed(2)}  % `;
      } else if (coin2 === "Ethereum" || coin2 === "ethereum") {
        dataDiv2.innerHTML = `${(resp.ethereum.usd_24h_change).toFixed(2)}  % `;
      } else if (coin2 === "Litecoin" || coin2 === "litecoin") {
        dataDiv2.innerHTML = `${(resp.litecoin.usd_24h_change).toFixed(2)}  % `;
      } else if (coin2 === "Ripple" || coin2 === "ripple") {
        dataDiv2.innerHTML = `${(resp.ripple.usd_24h_change).toFixed(2)}  % `;
      } else if (coin2 === "Chainlink" || coin2 === "chainlink") {
        dataDiv2.innerHTML = `${(resp.chainlink.usd_24h_change).toFixed(2)}  % `;
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

/*---/change call---*/

/*---getJSON calls for Exchanges Price feature---*/

/*$(document).ready(function () {
    $("#chainlink").click(fetchdata);
    $("#litecoin").click(fetchdata);
    $("#ethereum").click(fetchdata);
    $("#bitcoin").click(fetchdata);

    function fetchdata(coin) {
        var coin = $(this).attr("id");

        $("#binancebox").html("");
        $("#krakenbox").html("");
        $("#geminibox").html("");
        $("#bitfinexbox").html("");
        $.when(
            $.getJSON(`https://api.coingecko.com/api/v3/exchanges/binance/tickers?coin_ids=${coin}`),
            $.getJSON(`https://api.coingecko.com/api/v3/exchanges/kraken/tickers?coin_ids=${coin}`),
            $.getJSON(`https://api.coingecko.com/api/v3/exchanges/gemini/tickers?coin_ids=${coin}`),
            $.getJSON(`https://api.coingecko.com/api/v3/exchanges/bitfinex/tickers?coin_ids=${coin}`)
        ).then(
            function (firstResponse, secondResponse, thirdResponse, fourthResponse) {
                $("#binancebox").html(firstResponse[0].tickers[0].last);
                $("#krakenbox").html(secondResponse[0].tickers[0].last);
                $("#geminibox").html(thirdResponse[0].tickers[0].last);
                $("#bitfinexbox").html(fourthResponse[0].tickers[0].last);
            },

            function (errorResponse) {
                if (errorResponse.status === 404) {
                    $("#binancebox").html(
                        `Error`);
                }

                else {
                    console.log(errorResponse);
                    $("#binancebox").html(
                        `Re-enter`);
                }
            })
    }
})*/

/*---/exchanges---*/
















