var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence(){
    let randomN = Math.floor(Math.random() * 4);
    //console.log(randomN);
    return randomN;
}
let randomChosenColour = nextSequence();
gamePattern.push(randomChosenColour);
console.log(gamePattern);
