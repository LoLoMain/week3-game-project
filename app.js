// jQuery functions

$(document).ready(function(){
console.log ('watch out!');

});


$(document).ready(function () {
  $(document).keydown(function (theEvent) {
    if (
        theEvent.which === 39 ||
        theEvent.which === 37) {
      theEvent.preventDefault();
    }

    // right arrow key
    if (theEvent.which === 39) {
      krabsX += 15;
    }

    // left arrow key
    else if (theEvent.which === 37) {
      krabsX -= 15;
    }
  });
});
