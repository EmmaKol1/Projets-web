var gamePattern=[];
var userClickedPattern=[];

var buttonColors=["red","blue","green","yellow"];

var start = 0;
var level = 0;

$(".btn").click(handleClick);

$(document).keydown(function(event) {
  if(start===0){
    $("#level-title").text("Niveau "+level);
    nextSequence();
  }
  start=1;
});

function handleClick(){
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  
  checkAnswer(userClickedPattern.length-1);
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){$("#"+currentColor).removeClass("pressed");}, 50); 
}

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    console.log("success");
    
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(nextSequence, 1000); 
    }
  }
  else{
    console.log("GAME OVER");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over");}, 200); 
    start=0;
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    $("#level-title").text("Game Over, Appuie sur une touche pour recommencer");
  }
}

function nextSequence() {
  level++;
  $("#level-title").text("Niveau "+level);
  
  userClickedPattern=[];
  
  var randomNumber = (Math.random())*3;
  randomNumber=Math.round(randomNumber);
  
  var randomColorChosen=buttonColors[randomNumber];
  gamePattern.push(randomColorChosen);
  
  $("#"+randomColorChosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  
  playSound(randomColorChosen);
 
}