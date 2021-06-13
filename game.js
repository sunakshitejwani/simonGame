var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  let randomN = Math.floor(Math.random() * 4);
  //console.log(randomN);
  return randomN;
}
let randomChosenColour = nextSequence();
gamePattern.push(randomChosenColour);
console.log(gamePattern);
console.log(buttonColours[randomChosenColour]);

$(`.${buttonColours[randomChosenColour]}`).addClass("pressed");
setTimeout(function() {
    $(`.${buttonColours[randomChosenColour]}`).removeClass("pressed");
}, 100);
