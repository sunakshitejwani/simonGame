var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function playSound() {
  $(".btn").click(function() {
    //alert(this.id); // or alert($(this).attr('id'));
    gamePattern.push(this.id);
    $("#" + this.id)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    var audio = new Audio("sounds/" + this.id + ".mp3");
    audio.play();
  });
}

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

$(document).keypress(function() {
  nextSequence();
});

$(".btn").click(function(event) {
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
});

playSound();
