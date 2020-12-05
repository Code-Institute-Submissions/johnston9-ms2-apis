/*---Data getJSON calls for Exchanges Price feature---*/

$(document).ready(function () {
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
})

