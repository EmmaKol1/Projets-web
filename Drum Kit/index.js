var nbDrums = document.querySelectorAll(".drum").length;
for(var i=0;i<nbDrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

document.addEventListener("keydown",function(event) {
  buttonAnimation(event.key);
  makeSound(event.key);
});


function handleClick(){
  var audio;
  var buttonName = this.innerHTML;
  buttonAnimation(buttonName);
  makeSound(buttonName);
}

function makeSound(key){
  switch(key){
    case "e":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "r":
      audio = new Audio("sounds/kick-bass.mp3");
       break;
    case "t":
      audio = new Audio("sounds/snare.mp3");
       break;
    case "h":
      audio = new Audio("sounds/tom-1.mp3");
       break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
       break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
       break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
       break;
    default :
      audio = new Audio();
  }
  audio.play();
}

function buttonAnimation(currentKey){
  var currentButton = document.querySelector("."+currentKey);
  currentButton.classList.add("pressed");
  setTimeout(function(){currentButton.classList.remove("pressed");}, 200); 
}
