const frontImages = [
  "assets/memgame/images/bit1.jpg",
  "assets/memgame/images/back.jpg",
  "assets/memgame/images/bit2.jpg",
  "assets/memgame/images/back.jpg",
  "assets/memgame/images/bit3.jpg",
  "assets/memgame/images/back.jpg",
  "assets/memgame/images/eth1.jpg",
  "assets/memgame/images/back.jpg",
  "assets/memgame/images/lit1.jpg",
  "assets/memgame/images/back.jpg",
  "assets/memgame/images/rip1.jpg",
  "assets/memgame/images/back.jpg",
];

/*-------sounds-----------------*/

function playSoundflip() {
  var soundflip = document.getElementById("audio-flip");
  soundflip.play();
}

function playSoundlose() {
  var soundlose = document.getElementById("audio-lose");
  soundlose.play();
}

function playSoundpair() {
  var soundpair = document.getElementById("audio-pair");
  soundpair.play();
}

function playSoundwin() {
  var soundwin = document.getElementById("audio-win");
  soundwin.play();
}

/*-------/sounds-----------------*/

/*preshow*/

let faces = document.querySelectorAll(".card-front-face img");

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
      face.setAttribute("src", "assets/memgame/images/back.jpg");
    });
  }, 20000);
}
moveCard();

/*preshow*/

/*clock*/
let playertime;
let winnernumber;
let timerId2;
let clocktime = document.getElementById("clock");
let currentTime = clocktime.textContent;
let timebut = document.getElementById("time");
timebut.addEventListener("click", startClock)
let box = document.getElementById("box1")

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
    alert("GAME OVER!"); }, 1000);
    currentTime = 60;
    clearInterval(timerId2);
  } else if (winners.length === 2) {
      playertime1 = currentTime;
      let winnernumber = (Math.random()*10000).toFixed();
      localStorage.setItem('wintime', playertime1);
      localStorage.setItem('winnum', winnernumber)
    playSoundwin1();
    box.innerHTML = `Winner..your time is ${playertime1}...you number is ${winnernumber}.<spam id=winclick><a href= contact.html>Click</a></spam>  to enter competition.`;
    currentTime = 60;
    clearInterval(timerId2);
  }
}

/*play*/
winners = [];
var play = document.querySelector("#play");
play.addEventListener("click", shuffle);
var boxes = document.querySelectorAll(".card-box");

function shuffle() {
  clearInterval(timerId);
  clocktime.style.color = "red";
  currentTime = 60;
  clearInterval(timerId2);

  faces.forEach((face) => {
    face.setAttribute("src", "assets/memgame/images/back.jpg");
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

/*Flip*/

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
    playSoundpair();
  } else {
    unflipCards();
  }
}

function freezeCards() {
  console.log(winners);
  cardOne.removeEventListener("click", flip);
  winners.push(cardOne, cardTwo);
  cardTwo.removeEventListener("click", flip);
  /*if (winners.length === 4) {
    playSoundwin();
    setTimeout(() => {
    alert("Winner!"); }, 1000);
  }*/
  reset();
}

function unflipCards() {
  freezeGame = true;
  setTimeout(() => {
    cardOne.classList.remove("is-flipped");
    cardTwo.classList.remove("is-flipped");
    reset();
  }, 1500);
}

function reset() {
  flippedCard = false;
  freezeGame = false;
  cardOne = null;
  cardTwo = null;
}

cards.forEach((card) => card.addEventListener("click", flip));


