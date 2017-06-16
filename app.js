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



// // Get the modal
// var modal = document.getElementById('myModal');
//
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// };
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
// ;
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// };
