
// to connect to html
var canvas = document.querySelector('canvas');
// to make full width of screen
canvas.width = 800;
canvas.height = 600;

// context variable (abbrev.)
var c = canvas.getContext('2d');



var krabs = new Image();   // Create new img element
krabs.src = 'images/mrkrabs.png'; // Set source path
var krabsX = 500 ;
var krabsY = 400;


function draw(){
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);


c.drawImage(krabs, krabsX, krabsY);

}

draw();

setInterval(function () {
 // if (krabsX < window.innerWidth){
 //   krabsX +=5;
 //
 // }
 //
 // else {
 //   krabsX = -krabsX;
 // }

 draw();

}, 33);

// all this code must be organized
// var money = new Image ();
// money.src ='moneystack.png';
// var moneyX = 500; //this will probably need to change later
// var moneyY = -100;
// // put this inside draw function and clearRect
// c.drawImage(money, moneyX, moneyY);
// setInterval(function () {
// moneyY += 5;
//
//  draw();
//
// }, 33);

// -
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
var fallingItems = [];
var gameObjects = ["coins","anvils"];
fallingItems.push(gameObjects[Math.floor(Math.random()*gameObjects.length)]);

var catchGame = {
  score: 0,
  time: 60,
  isOver: false
};

function startGame(){

}

function gameEffect(){

  if (objectHit === coin) {
      catchGame.score +=10;
    }

  if (objectHit === anvil) {
      catchGame.score -=10;
    }
  }


function endGame(){
  fallingItems = [];
  catchGame.score = 0;
  catchGame.time = 60;
  catchGame.isOver = true;
  $ ('#score').html(0);

  startGame();

}

// --------------------------------------------------------------------


var startingScore = 0;
var userScore = 0;

  function GameObject(nameParam, pointsParam) {
  this.name = nameParam;
  this.points = pointsParam;
}

GameObject.prototype.scoreEffect = function (){
  userScore = startingScore + this.pointsParam;
};


function Coins (nameParam, pointsParam) {
  GameObject.call(this,nameParam, pointsParam);
}

Coins.prototype = Object.create(GameObject.prototype);
 // create new/updated functions,
  // userScore add 10 pts


function Anvil (nameParam, pointsParam) {
  GameObject.call(this,nameParam, pointsParam, statusParam);
}

Anvil.prototype = Object.create(GameObject.prototype);
 // create new/updated functions,
 // userScore minus 10 pts



// fix this what should variables be called?
var getPoints = new GameObject ('Coins', 10);
var losePoints = new GameObject ('Anvil', 10);
