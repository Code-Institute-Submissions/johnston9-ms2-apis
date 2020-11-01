/*preshow*/
const frontImages = [
  "assets/memgame/images/bit1.jpg",
  "assets/memgame/images/block.jpg",
  "assets/memgame/images/bit2.jpg",
  "assets/memgame/images/block.jpg",
  "assets/memgame/images/bit3.jpg",
  "assets/memgame/images/block.jpg",
  "assets/memgame/images/eth1.jpg",
  "assets/memgame/images/block.jpg",
  "assets/memgame/images/lit1.jpg",
  "assets/memgame/images/block.jpg",
  "assets/memgame/images/rip1.jpg",
  "assets/memgame/images/block.jpg",
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
let clocktime = document.getElementById("clock");
let currentTime = clocktime.textContent; 
let timebut = document.getElementById("time");
timebut.addEventListener("click", startClock);

function countDown() {
  currentTime--;
  clocktime.textContent = currentTime;

  if (currentTime === 0 || winners.length === 12) { 
    alert("GAME OVER!");
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
  clearTimeout(timerId);
  clocktime.style.color = "red";
  

  faces.forEach((face) => {
    face.setAttribute("src", "assets/memgame/images/block.jpg");
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
  
  //reset(); 
}

