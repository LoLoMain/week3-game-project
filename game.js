
//  to connect to html
var canvas = document.querySelector('canvas');
// to make full width of screen
canvas.width = 850;
canvas.height = 600;

// context variable (abbrev.)
var c = canvas.getContext('2d');


// Images
var krabs = new Image();   // Create new img element
krabs.src = 'images/mrkrabs.png'; // Set source path

var anvil = {
  image: new Image (),
  width: 160,
  height: 118,
  type: 'bad'
};
anvil.image.src ='images/anvil2.png';

var money = {
  image: new Image (),
  width: 100,
  height: 55,
  type: 'good'
};
money.image.src ='images/moneystack2.png';

// Mr Krabs Position
var krabsX = 500;
var krabsY = 400;

// Creating Random Items
var fallingItems = [];
var availableItems = [money];
var availableItems = [anvil, money];

function createObject (){
  var randomX = Math.floor(Math.random() * 650) + 1;
  var objectIndex = Math.floor(Math.random() * availableItems.length);
  var objectInfo = {
    x: randomX,
    y: 1,
    object: availableItems[objectIndex] };

  fallingItems.push(objectInfo);
}

var lives = 5;
var userScore = 0;

function drawRandom(){
  var toRemove =[];
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  fallingItems.forEach(function(element){
    c.drawImage(element.object.image, element.x, element.y);
    element.y += 7;
    console.log(element.y);
    // check element v krab collision

    if (element.y + element.object.height > krabsY &&
        (element.x < krabsX + 250 && krabsX < element.x + element.object.width) ){

        toRemove.push(element);
        if (element.object.type === 'good'){
          c.clearRect(0, 0, window.innerWidth, window.innerHeight);
            userScore +=10;
            $('#score').html(userScore);

          }
        else{
          c.clearRect(0, 0, window.innerWidth, window.innerHeight);
          lives -=1;
          $('#life').html(lives);

        }
    }
    else{
      console.log('Miss!');
    }
  });

  toRemove.forEach(function(element){
    var index = fallingItems.indexOf(element);
    fallingItems.splice(index, 1);
  });
}

function draw(){
  // c.clearRect(30, 5, window.innerWidth, window.innerHeight);
  c.drawImage(krabs, krabsX, krabsY);
}

// Drawing of images

var stopDraw = setInterval(function () {
                if (count >=1) {
                  createObject();
                }
                else {
                 clearInterval(stopDraw);
                 }

}, 2000);


  setInterval(function () {
    drawRandom();
    draw();

 }, 100);


 // function gameOver(){
 //    if (lives === 0){
 //      $('#gameover').show();
 //    }
 //
 // }

// ---------------------------------------------------------------------
// timing info
var count=60;

var counter =setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML=count + " secs";

}
