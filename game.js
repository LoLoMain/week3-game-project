
// to connect to html
var canvas = document.querySelector('canvas');
// to make full width of screen
canvas.width = 800;
canvas.height = 600;

// context variable (abbrev.)
var c = canvas.getContext('2d');


// Mr. Krabs Position

var krabs = new Image();   // Create new img element

krabs.src = 'images/mrkrabs.png'; // Set source path
var krabsX = 500 ;
var krabsY = 400;

function draw(){
  // c.clearRect(30, 5, window.innerWidth, window.innerHeight);
  c.drawImage(krabs, krabsX, krabsY);
}

// Anvil position

var anvil = new Image ();
anvil.src ='images/anvil.png';
var anvilX = 300; //this will probably need to change later
var anvilY = 1;

// put this inside draw function
function drawAnvil(){
 anvilY += 5;
 // c.clearRect(0, 0, window.innerWidth, window.innerHeight);
 c.drawImage(anvil, anvilX, anvilY);
}

 // Money position

var money = new Image ();
money.src ='images/moneystack.png';
var moneyX = 500; //this will probably need to change later
var moneyY = 1;

// put this inside draw function and clearRect
function drawMoney(){
  moneyY += 5;
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  c.drawImage(money, moneyX, moneyY);
}

// Drawing of Images
setInterval(function () {

 drawMoney();
 draw();
 drawAnvil();

}, 100);

// ---------------------------------------------------------------------
// timing info
var count=60;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
}
// ---------------------------------------------------------------------
// --------------------------------------------------------------------
//  Constructor Functions for Game Objects

// var lives = 3;
// var userScore = 0;
//
//   function GameObject(nameParam, pointsParam) {
//   this.name = nameParam;
//   this.points = pointsParam;
// }
//
// GameObject.prototype.scoreEffect = function (){
//   userScore += this.pointsParam;
// };
//
//
// function Anvil (nameParam, pointsParam) {
//   GameObject.call(this,nameParam, pointsParam);
// }
//
// Anvil.prototype = Object.create(GameObject.prototype);
//     this.livesEffect = function () {
//       lives -= 1;
//     };
//
//
//  // -------------------------------------------------
//  // Game Functions
//
//  var fallingItems = [];
//  var gameObjects = ["coins","anvils"];
//  fallingItems.push(gameObjects[Math.floor(Math.random()*gameObjects.length)]);
//  //  this needs to go into a draw function
//  //  need to create the items and have them redrawn with different y
//
//
//  var catchGame = {
//    score: 0,
//    time: 60,
//    lives: 3,
//    isOver: false
//  };
//
//  function startGame(){
//
//  }
//
//  function gameEffect(){
//
//    if (objectHit === ) {
//        catchGame.score +=10;
//      }
//
//    if (objectHit === anvil) {
//        catchGame.score -=10;
//      }
//    }
//
//
//  function endGame(){
//    if (lives === 0){
//    fallingItems = [];
//    catchGame.score = 0;
//    catchGame.time = 60;
//    catchGame.isOver = true;
//    $ ('#score').html(0);
//
//    startGame();
//  }
//  }
//
//
//
// // fix this what should variables be called?
// var getPoints = new GameObject ('Coins', 10);
// var losePoints = new GameObject ('Anvil', 10);
