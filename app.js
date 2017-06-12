// jQuery functions

$(document).ready(function(){
console.log ('watch out!');

});




$(document).ready(function(){
 var leftAmount = 0;
 var topAmount = 0;

  $(document).keydown(function(theEvent){
    theEvent.preventDefault();

// up arrow
    if (theEvent.which === 38  ){
      topAmount -= 10;
    }
    // right arrow
    else if (theEvent.which === 39 ){
      leftAmount += 10;
    }
    // down arrow
    else if (theEvent.which === 40 ){
    topAmount += 10;
    }
    // left arrow
    else if (theEvent.which === 37 ){
      leftAmount -= 10;
    }

    $('#literally-everything').css ('left', leftAmount + 'px');
    $('#literally-everything').css ('top', topAmount + 'px');
    $('#literally-everything').css ('position','relative');

  });
});
