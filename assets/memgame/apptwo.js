const frontImages = [
  "assets/memgame/images/cw.png",
  "assets/memgame/images/unicorn1.png",
  "assets/memgame/images/cw2.png",
  "assets/memgame/images/unicorn1.png",
  "assets/memgame/images/hq1.png",
  "assets/memgame/images/unicorn1.png",
  "assets/memgame/images/hq2.png",
  "assets/memgame/images/unicorn1.png",
  "assets/memgame/images/sf1.png",
  "assets/memgame/images/unicorn1.png",
  "assets/memgame/images/wr1.png",
  "assets/memgame/images/unicorn1.png",
];

/*-------sounds-----------------*/

function playSoundflip1() {
  var soundflip1 = document.getElementById("audio-flip1");
  soundflip1.play();
}

function playSoundlose1() {
  var soundlose1 = document.getElementById("audio-lose1");
  soundlose1.play();
}

function playSoundpair1() {
  var soundpair1 = document.getElementById("audio-pair1");
  soundpair1.play();
}

function playSoundwin1() {
  var soundwin1 = document.getElementById("audio-win1");
  soundwin1.play();
}

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
      face.setAttribute("src", "assets/memgame/images/unicorn1.png");
    });
  }, 20000);
}
moveCard();

/*/preshow*/

/*clock*/
let wintime1;
let playertime1;
let timerId2;
let clocktime1 = document.getElementById("clock1");
let currentTime1 = clocktime1.textContent;
let timebut1 = document.getElementById("time1");
timebut1.addEventListener("click", startClock);
let box1 = document.getElementById("gbox1")

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
    alert("GAME OVER!"); }, 1000);
    currentTime1 = 60;
    clearInterval(timerId2);
  } else if (winners1.length === 2) {
    playertime1 = currentTime1;
    playSoundwin1();
    currentTime1 = 60;
    clearInterval(timerId2);
  }
}

/*play*/
winners1 = [];
var play1 = document.querySelector("#play1");
play1.addEventListener("click", shuffle);
var boxes = document.querySelectorAll(".card-box");

function shuffle() {
   
  clearInterval(timerId);
  clocktime1.style.color = "red";
  currentTime1 = 60;
  clearInterval(timerId2);

  faces.forEach((face) => {
    face.setAttribute("src", "assets/memgame/images/unicorn1.png");
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

/*Flip*/

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
    playSoundpair1();
  } else {
    unflipCards();
  }
}

function freezeCards() {
  cardOne.removeEventListener("click", flip);
  winners1.push(cardOne, cardTwo);
  cardTwo.removeEventListener("click", flip);
  if (winners1.length === 2) {
    playSoundwin1();
    currentTime1 = 60;
    clearInterval(timerId2);
  }
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



