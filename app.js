$(document).ready(function () {

    $(".StartButton").click(function () {
        $(".SplashScreen").hide();
        $(".FinishScreen").hide();
        $("#canvasArea").show();
        startGame();

    });
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
      krabsX += 25;
    }

    // left arrow key
    else if (theEvent.which === 37) {
      krabsX -= 25;
    }
  });
});



$(document).ready(function () {
  $('.scoreboard').html(userScore);
  });

  $(document).ready(function () {
    $('.lives').html(lives);
    });
