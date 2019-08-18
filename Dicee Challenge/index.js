function setWaitingMessage(){
  document.querySelector(".message").textContent="Draw!";
  document.querySelector(".flag-img1").setAttribute("src","");
}


function draw(){
  var rand1 = Math.random();
  var rand2 = Math.random();
  
  var nb1 = Math.floor(1+rand1*6);
  var nb2 = Math.floor(1+rand2*6);
  
  var dice1 = "dice"+nb1;
  var dice2 = "dice"+nb2;
  
  document.querySelector(".img1").setAttribute("src","images/"+dice1+".png");
  document.querySelector(".img2").setAttribute("src","images/"+dice2+".png");
  
  document.querySelector(".flag-img1").setAttribute("src","images/flag.png");
  
  if (nb1>nb2){
    document.querySelector(".message").textContent="Player 1 wins";
    //document.querySelector(".flag-img1").classList.toggle("invisible");
    document.querySelector(".flag-img1").classList.remove("display-right");
    document.querySelector(".flag-img1").classList.add("display-left");
  }
  else if(nb2>nb1){
    document.querySelector(".message").textContent="Player 2 wins";
    document.querySelector(".flag-img1").classList.remove("display-left");
    document.querySelector(".flag-img1").classList.add("display-right");
  }
  else
  {
    document.querySelector(".message").textContent="Equality!";
    document.querySelector(".flag-img1").setAttribute("src","");
  }
  
  setTimeout(setWaitingMessage, 2000); 
  
}


draw();