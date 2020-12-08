/*---The code for bitmatch.js and the Bitmatch game is duplicated in funmatch.js for Funmatch 
bescause of the different images array, different winners array and different timers--*/

/*---image array for the onload preshow image display---*/

const frontImages = [
	"assets/bitmatch/images/bit1.jpg",
	"assets/bitmatch/images/back.jpg",
	"assets/bitmatch/images/bit2.jpg",
	"assets/bitmatch/images/back.jpg",
	"assets/bitmatch/images/bit3.jpg",
	"assets/bitmatch/images/back.jpg",
	"assets/bitmatch/images/eth1.jpg",
	"assets/bitmatch/images/back.jpg",
	"assets/bitmatch/images/lit1.jpg",
	"assets/bitmatch/images/back.jpg",
	"assets/bitmatch/images/rip1.jpg",
	"assets/bitmatch/images/back.jpg",
];

/*---sounds---*/

/*---Functions to allow only one control box to be displayed on the screen
for the 4 audio files and to set it's audio src---*/

var sound = document.getElementById("audio1");

function playSoundflip() {
	const srcflip = "assets/bitmatch/sounds/click.mp3";
	sound.setAttribute('src', srcflip);
	sound.play();
}

function playSoundlose() {
	const srclose = "assets/bitmatch/sounds/game-lose.mp3";
	sound.setAttribute('src', srclose);
	sound.play();
}

function playSoundpair() {
	const srcpair = "assets/bitmatch/sounds/pair.mp3";
	sound.setAttribute('src', srcpair);
	sound.play();
}

function playSoundwin() {
	const srcwin = "assets/bitmatch/sounds/win.mp3";
	sound.setAttribute('src', srcwin);
	sound.play();
}

/*---On load preshow images display---/

/*---The images are set on the cards back face with the movecard function 
and a setTimeout function that lasts 20 seconds.*/

let faces = document.querySelectorAll(".card-front-face img");
let timerId;

function flashImage() {
	return frontImages[Math.floor(Math.random() * 12)];
}

function flashCard() {
	let randomface = faces[Math.floor(Math.random() * 12)];
	randomface.setAttribute("src", flashImage());
}

function moveCard() {
	timerId = setInterval(flashCard, 500);
	setTimeout(() => {
		clearInterval(timerId);
		faces.forEach((face) => {
			face.setAttribute("src", "assets/bitmatch/images/back.jpg");
		});
	}, 20000);
}
moveCard();

/*-------Timer------*/

/*---Countdown function for timer. 

1) If player loses calls alert and plays sound.
2) If player wins sets win time to localstorage along
with a ramdom winner number, displays these on screen and plays win sound.
The random number does not need to be unique as users will be sending 
it in with their email---*/

let playertime;
let winnernumber;
let timerId2;
let clocktime = document.getElementById("clock");
let currentTime = clocktime.textContent;
let timebut = document.getElementById("time");
timebut.addEventListener("click", startClock);
let box = document.getElementById("box1");

function startClock() {
	clocktime.style.color = "black";
	timerId2 = setInterval(countDown, 1000);
}

function countDown() {
	currentTime--;
	clocktime.textContent = currentTime;

	if (currentTime === 0) {
		playSoundlose();
		setTimeout(() => {
			alert("GAME OVER!");
		}, 1000);
		currentTime = 60;
		clearInterval(timerId2);
	} else if (winners.length === 2) {
		playertime = currentTime;
		winnernumber = (Math.random() * 10000).toFixed();
		localStorage.setItem('wintime', playertime);
		localStorage.setItem('winnum', winnernumber);
		setTimeout(() => {
			playSoundwin();
		}, 2000);
		box.innerHTML = `Winner..your time is ${playertime}...you number is ${winnernumber}.<spam id=winclick><a href= contact.html>Click</a></spam>  to enter competition.`;
		currentTime = 60;
		clearInterval(timerId2);
	}
}

/*--------Play button and shuffle-----------*/

/*---When the player clicks play 

1) The cards back image is reset after the preshow function. 
2) The timers are reset.
3) The cards are shuffled.
4) The winner display box is cleared.----------*/

let winners = [];
var play = document.querySelector("#play");
play.addEventListener("click", shuffle);
var boxes = document.querySelectorAll(".card-box");

function shuffle() {
	box.innerHTML = "";
	clearInterval(timerId);
	clocktime.style.color = "red";
	currentTime = 60;
	clearInterval(timerId2);

	faces.forEach((face) => {
		face.setAttribute("src", "assets/bitmatch/images/back.jpg");
	});

	winners.forEach((win) => {
		win.addEventListener("click", flip);
	});
	winners.forEach((win) => {
		win.classList.remove("is-flipped");
	});

	winners = [];

	boxes.forEach((box) => {
		let ramPos = Math.floor(Math.random() * 12);
		box.style.order = ramPos;
	});

	reset();
}

/*--------------Main game functions----------*/

/*---Inspired by code from freeCodeCamp, details in Readme---*/

var cards = document.querySelectorAll(".card");
let flippedCard = false;
let freezeGame = false;
let cardOne, cardTwo;

function flip() {
	if (freezeGame) return;
	if (this === cardOne) return;
	playSoundflip();
	this.classList.add("is-flipped");
	if (!flippedCard) {
		flippedCard = true;
		cardOne = this;
	} else {
		flippedCard = false;
		cardTwo = this;
		checkForMatch();
	}
}

function checkForMatch() {
	if (cardOne.dataset.name === cardTwo.dataset.name) {
		freezeCards();
		setTimeout(() => {
			playSoundpair();
		}, 500);
	} else {
		unflipCards();
	}
}

function freezeCards() {
	cardOne.removeEventListener("click", flip);
	winners.push(cardOne, cardTwo);
	cardTwo.removeEventListener("click", flip);
	reset();
}

function unflipCards() {
	freezeGame = true;
	setTimeout(() => {
		cardOne.classList.remove("is-flipped");
		cardTwo.classList.remove("is-flipped");
		reset();
	}, 1000);
}

function reset() {
	flippedCard = false;
	freezeGame = false;
	cardOne = null;
	cardTwo = null;
}

cards.forEach((card) => card.addEventListener("click", flip));


