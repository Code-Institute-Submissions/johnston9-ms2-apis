/*preshow*/
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
}
moveCard();

/*clock*/
let timerId2 
let clocktime = document.getElementById("clock");
let currentTime = clocktime.textContent; 
let timebut = document.getElementById("time");
timebut.addEventListener("click", startClock);

function startClock() {
  clocktime.style.color = "black";
  timerId2 = setInterval(countDown, 1000);
}

function countDown() {
  currentTime--;
  clocktime.textContent = currentTime;

  if (currentTime === 0) { 
    alert("GAME OVER!");
    currentTime = 60;
    clearInterval(timerId2);
  } else if (winners.length === 12) {
       alert("Winner Claim your prize");
    currentTime = 60;
    clearInterval(timerId2);
  }
}
function startClock() {
  clocktime.style.color = "black";
  timerId2 = setInterval(countDown, 1000);
}

/*play*/   
winners = []
var play = document.querySelector("#play");
play.addEventListener("click", shuffle);
var boxes = document.querySelectorAll(".card-box");

function shuffle() {
  clearInterval(timerId); 
  clocktime.style.color = "red";
  currentTime = 60;
  clearInterval(timerId2);
  
  faces.forEach((face) => {
    face.setAttribute("src", "assets/memgame/images/unicorn1.png");
  });

  /*for(let i = 0; i < winners.length; i++) {
       win.addEventListener("click", flip)}*/

  winners.forEach((win) => {
      win.addEventListener("click", flip)
  })
  winners.forEach((win) => {
      win.classList.remove("is-flipped");
 }) 

 winners = []
  
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
  } else {
    unflipCards();
  }
}

function freezeCards() {
  cardOne.removeEventListener("click", flip);
  winners.push(cardOne, cardTwo)
  cardTwo.removeEventListener("click", flip);
  if (winners.length === 12) {
         alert("Winner! Fastest time wins Bitcoin. Go to Contact Page to send in your details.")
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
