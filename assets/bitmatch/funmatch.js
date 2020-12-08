/*---The code for funmatch.js is in the main a duplication of bitmatch.js 
but this duplication was necessary bescause of the different images array, different winners array
and different timers---*/

/*---image array for the onload preshow image display---*/

const frontImages = [
	"assets/bitmatch/images/cw.png",
	"assets/bitmatch/images/unicorn1.png",
	"assets/bitmatch/images/cw2.png",
	"assets/bitmatch/images/unicorn1.png",
	"assets/bitmatch/images/hq1.png",
	"assets/bitmatch/images/unicorn1.png",
	"assets/bitmatch/images/hq2.png",
	"assets/bitmatch/images/unicorn1.png",
	"assets/bitmatch/images/sf1.png",
	"assets/bitmatch/images/unicorn1.png",
	"assets/bitmatch/images/wr1.png",
	"assets/bitmatch/images/unicorn1.png",
];

/*-------sounds-----------------*/

/*---Functions so only one control box is displayed for the 
4 audio files and to set the audio src in it---*/

var sound = document.getElementById("audio1");

function playSoundflip1() {
	const srcflip = "assets/bitmatch/sounds/click.mp3";
	sound.setAttribute('src', srcflip);
	sound.play();
}

function playSoundlose1() {
	const srclose = "assets/bitmatch/sounds/game-lose.mp3";
	sound.setAttribute('src', srclose);
	sound.play();
}

function playSoundpair1() {
	const srcpair = "assets/bitmatch/sounds/pair.mp3";
	sound.setAttribute('src', srcpair);
	sound.play();
}

function playSoundwin1() {
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
			face.setAttribute("src", "assets/bitmatch/images/unicorn1.png");
		});
	}, 20000);
}
moveCard();

/*-------Timer------*/

/*--Countdown function for timer. 
1) If player loses calls alert and plays sound.
2) If player wins displays "Winner"" on screen and plays win sound.--*/

let playertime1;
let timerId2;
let clocktime1 = document.getElementById("clock1");
let currentTime1 = clocktime1.textContent;
let timebut1 = document.getElementById("time1");
timebut1.addEventListener("click", startClock);
let box1 = document.getElementById("gbox1");

function startClock() {
	clocktime1.style.color = "black";
	timerId2 = setInterval(countDown, 1000);
}

function countDown() {
	currentTime1--;
	clocktime1.textContent = currentTime1;

	if (currentTime1 === 0) {
		playSoundlose1();
		setTimeout(() => {
			alert("GAME OVER!");
		}, 1000);
		currentTime1 = 60;
		clearInterval(timerId2);
	} else if (winners1.length === 2) {
		playertime1 = currentTime1;
		setTimeout(() => {
			playSoundwin1();
		}, 2000);
		box1.innerHTML = `Winner`;
		currentTime1 = 60;
		clearInterval(timerId2);

	}
}

/*--------Play button and shuffle-----------*/

/*---When the player clicks play 

1) The cards back image is reset after the preshow function. 
2) The timers are reset.
3) The cards are shuffled.
4) The winner display box is cleared.---*/

let winners1 = [];
var play1 = document.querySelector("#play1");
play1.addEventListener("click", shuffle);
var boxes = document.querySelectorAll(".card-box");

function shuffle() {

	clearInterval(timerId);
	clocktime1.style.color = "red";
	currentTime1 = 60;
	clearInterval(timerId2);

	faces.forEach((face) => {
		face.setAttribute("src", "assets/bitmatch/images/unicorn1.png");
	});

	box1.innerHTML = "";

	winners1.forEach((win) => {
		win.addEventListener("click", flip);
	});
	winners1.forEach((win) => {
		win.classList.remove("is-flipped");
	});

	winners1 = [];

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
	playSoundflip1();
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
			playSoundpair1();
		}, 500);
	} else {
		unflipCards();
	}
}

function freezeCards() {
	cardOne.removeEventListener("click", flip);
	winners1.push(cardOne, cardTwo);
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



