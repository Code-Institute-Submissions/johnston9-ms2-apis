/*...........bitcoin call....*/
$(document).ready(function() { 
     $("#bitcoin-button").click(function(){
     //function fetchdata(coin) {
    $("#binancebox").html("");
    $("#krakenbox").html("");
    $("#geminibox").html("");
    $("#bitfinexbox").html("");
    $.when(
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/binance/tickers?coin_ids=bitcoin`),
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/kraken/tickers?coin_ids=bitcoin`),
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/gemini/tickers?coin_ids=bitcoin`),
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/bitfinex/tickers?coin_ids=bitcoin`)
    ).then(
        function(firstResponse, secondResponse, thirdResponse, fourthResponse) { 
            $("#binancebox").html(firstResponse[0].tickers[0].last);
            $("#krakenbox").html(secondResponse[0].tickers[0].last);
            $("#geminibox").html(thirdResponse[0].tickers[0].last);
            $("#bitfinexbox").html(fourthResponse[0].tickers[0].last);
            },  
            
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#binancebox").html(
                    `Error`);
            } else {
                console.log(errorResponse);
                $("#binancebox").html(
                    `Re-enter`);
            }} )  
        }) })


/*...........ethereum call....*/
$(document).ready(function() { 
     $("#ethereum-button").click(function(){
     //function fetchdata(coin) {
    $("#binancebox").html("");
    $("#krakenbox").html("");
    $("#geminibox").html("");
    $("#bitfinexbox").html("");
    $.when(
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/binance/tickers?coin_ids=ethereum`),
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/kraken/tickers?coin_ids=ethereum`),
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/gemini/tickers?coin_ids=ethereum`),
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/bitfinex/tickers?coin_ids=ethereum`)
    ).then(
        function(firstResponse, secondResponse, thirdResponse, fourthResponse) { 
            $("#binancebox").html(firstResponse[0].tickers[0].last);
            $("#krakenbox").html(secondResponse[0].tickers[0].last);
            $("#geminibox").html(thirdResponse[0].tickers[0].last);
            $("#bitfinexbox").html((fourthResponse[0].tickers[0].last).toFixed(2));
             },  
            
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#binancebox").html(
                    `Error`);
            } else {
                console.log(errorResponse);
                $("#binancebox").html(
                    `Re-enter`);
            }} )  
        }) })


/*...........ripple call....*/
$(document).ready(function() { 
     $("#ripple-button").click(function(){
     //function fetchdata(coin) {
    $("#binancebox").html("");
    $("#krakenbox").html("");
    $("#geminibox").html("");
    $("#bitfinexbox").html("");
    $.when(
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/binance/tickers?coin_ids=ripple`),
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/kraken/tickers?coin_ids=ripple`),
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/gemini/tickers?coin_ids=ripple`),
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/bitfinex/tickers?coin_ids=ripple`)
    ).then(
        function(firstResponse, secondResponse, thirdResponse, fourthResponse) { 
            $("#binancebox").html(firstResponse[0].tickers[0].last);
            $("#krakenbox").html(secondResponse[0].tickers[0].last);
            $("#geminibox").html("xxx");
            $("#bitfinexbox").html(fourthResponse[0].tickers[0].last);
             },  
            
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#binancebox").html(
                    `Error`);
            } else {
                console.log(errorResponse);
                $("#binancebox").html(
                    `Re-enter`);
            }} )  
        }) })


/*...........chainlink call....*/
$(document).ready(function() { 
     $("#chainlink-button").click(function(){
     //function fetchdata(coin) {
    $("#binancebox").html("");
    $("#krakenbox").html("");
    $("#geminibox").html("");
    $("#bitfinexbox").html("");
    $.when(
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/binance/tickers?coin_ids=chainlink`),
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/kraken/tickers?coin_ids=chainlink`),
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/gemini/tickers?coin_ids=chainlink`),
           $.getJSON(`https://api.coingecko.com/api/v3/exchanges/bitfinex/tickers?coin_ids=chainlink`)
    ).then(
        function(firstResponse, secondResponse, thirdResponse, fourthResponse) { 
            $("#binancebox").html(firstResponse[0].tickers[0].last);
            $("#krakenbox").html(secondResponse[0].tickers[0].last);
            $("#geminibox").html(thirdResponse[0].tickers[0].last);
            $("#bitfinexbox").html(fourthResponse[0].tickers[0].last);
             },  
            
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#binancebox").html(
                    `Error`);
            } else {
                console.log(errorResponse);
                $("#binancebox").html(
                    `Re-enter`);
            }} )  
        }) })


