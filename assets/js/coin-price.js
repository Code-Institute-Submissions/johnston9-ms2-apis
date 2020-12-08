/*---Data fetch call for Index Page coin price feature.

     The user imputs a Cryptocurrency coin into the "coin" imput box and 
     clicks submit to trigger the "fetchdata1" fetch function. 
     This sets the imput as the variable "coin" then calls to the API Coingecko 
     for that coin's price.
     This is extracted from the response and set in the "coin-data" data-box.
     
     Error messages are printed in the data box---*/

document.getElementById("coinfetch").addEventListener("click", fetchdata1);

function fetchdata1(coin) {
	coin = $("#coin").val();
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

/*--function to clear the text from the "coin" imput box
    and the "coin-data" data box.--*/

document.getElementById("clear").addEventListener("click", cleardata);

function cleardata() {
	let coin = document.getElementById("coin");
	let dataDiv = document.getElementById("coin-data");
	coin.value = "";
	dataDiv.innerHTML = "";
}


















