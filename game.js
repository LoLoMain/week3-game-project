// JS file for game logic

console.log ('watch out!');

// var score = 0;
// var counter = 60;  // set an interval to count down



// to connect to html
var canvas = document.querySelector('canvas');
// to make full width of screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context variable (abbrev.)
var c = canvas.getContext('2d');



var krabs = new Image();   // Create new img element
var krabsX = 500 ;
var krabsY = 300;

function draw(){
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);


c.drawImage(krabs, krabsX, krabsY);
}

krabs.src = 'images/mrkrabs.png'; // Set source path


setInterval(function () {
krabsX +=5;

  draw();
}, 33);
