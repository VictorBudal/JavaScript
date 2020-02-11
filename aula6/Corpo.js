
var jog;
var velo;
var dx;
var dy;
var px;
var py;
var anima;
var estado;

function inicia(){
  velo=2;
  dx=1;
  dy=0;
  px=0;
  py=0;
  estado=1;
  jog=document.getElementById("jogador");
  game();
  jog.addEventListener("click",moverParar);
  
}
function moverParar(){
  if(estado){
    estado=0;
    jog.style.backgroundColor="#f00";
    cancelAnimationFrame(anima);
  }else{
    estado =1;
    jog.style.backgroundColor="#00f";
    anima=requestAnimationFrame(game);
  }
}

function game(){
  px+=dx*velo;
  //py+=dy*velo;
  jog.style.left=px+"px";
  //jog.style.top=py+"px";
  if(px>800){
    dx=-1;
  }else if (px<0){
    dx=+1;
  }
  anima=requestAnimationFrame(game);
}

window.addEventListener("load",inicia);


