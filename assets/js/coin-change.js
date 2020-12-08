/*---Data fetch call for Cryptocurrency Page 24 Hour Change feature.

     The user imputs a Cryptocurrency coin into the "coin2" imput box and 
     clicks submit to trigger the "fetchdata2" fetch function. 
     This sets the imput as the variable "coin2" then calls to the API Coingecko 
     for that coin's 24 hour change percentage.
     This is extracted from the response and set in the "coin-data2" data-box.
     
     Error messages are printed in the data box---*/

     

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

/*--function to clear the text from the "coin2" imput box
    and  from the "coin-data2" data box.--*/

document.getElementById("clear2").addEventListener("click", cleardata2);

function cleardata2() {
	let coin2 = document.getElementById("coin2");
	let dataDiv2 = document.getElementById("coin-data2");
	coin2.value = "";
	dataDiv2.innerHTML = "";
}




