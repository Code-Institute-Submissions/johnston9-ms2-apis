/*---"When and then" used for "getJSON" calls for Cryptocurrency Page Exchanges prices feature.

     The user clicks a Cryptocurrency coin to call the "fetchdata" function.
     This sets the variable "coin" to that coins's id using the attr function
     then send 4 calls to the "Coingecko API" for the coin's price in 4 exchanges. 
     The prices are extracted from the responses and set in 4 data boxes.
     
     Error messages are printed in the data box---*/

$(document).ready(function () {

	$("#chainlink").click(fetchdata);
	$("#litecoin").click(fetchdata);
	$("#ethereum").click(fetchdata);
	$("#bitcoin").click(fetchdata);

	function fetchdata(coin) {
		coin = $(this).attr("id");

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
				$("#binancebox").html((firstResponse[0].tickers[0].last).toFixed(2));
				$("#krakenbox").html((secondResponse[0].tickers[0].last).toFixed(2));
				$("#geminibox").html((thirdResponse[0].tickers[0].last).toFixed(2));
				$("#bitfinexbox").html((fourthResponse[0].tickers[0].last).toFixed(2));
			},

			function (errorResponse) {
				if (errorResponse.status === 404) {
					$("#binancebox").html(
						`Error`);
				} else {
					console.log(errorResponse);
					$("#binancebox").html(
						`Re-enter`);
				}
			});
	}
});
