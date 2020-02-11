var dx;
var dy;
var px;
var py;

var inipx;
var inipy;

var velo;
var temp;
var score;
var soma;

var personagem;
var inimigo;

function game(){
  dx=0;
  dy=0;
  px=400;
  py=500;
  velo=3;
  inimigo=document.getElementById("comida");
  score="Score:"+1;
  document.getElementById("score").value=score;
  personagem=document.getElementById("personagem");
  document.addEventListener("keydown",teclaDw);
  document.addEventListener("keyup",teclaUp);

  temp=setInterval(enterFrame,8);
}
function teclaDw(){
  var tecla= event.keyCode;
  if(tecla==37){
    dx=-1;
  }else if(tecla==38){
    dy=-1;
  }else if (tecla==39 ){
    dx=+1;
  }else if(tecla == 40){
    dy=+1;
  }
}

function teclaUp(){
  var tecla= event.keyCode;
  if(tecla==37){
    dx=0;
  }else if(tecla==38){
    dy=0;
  }else if (tecla==39 ){
    dx=0;
  }else if(tecla == 40){
    dy=0;
  }
}

function enterFrame(){
  px+=dx*velo;
  py+=dy*velo;
  moverJogador();
  personagem.style.left=px+"px";
  personagem.style.top=py+"px";
  comida();
  //console.log(px);
 // console.log(py);
 
}
function moverJogador(){
  if(px<400){
    px=400;
    personagem.style.left=px+"px";
  }
  if(px>850){
    px=850;
    personagem.style.left=px+"px";
  }
  if(py<100){
    py=100;
    personagem.style.top=py+"px";
  }
  if(py>550){
    py=550;
    personagem.style.top=py+"px";
  }

  }
function comida(){
  inipx=Math.random() * (850-400) +400;
  inimigo.style.top=inipx;
  console.log(inimigo.style.top);
}

  window.addEventListener("load",game);