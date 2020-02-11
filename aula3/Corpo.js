/*
Nesse trabalho trabalhos mais um pouco com
os eventos e interações
*/
var px=0;
var py=0;
var velo= 40
var obj;


function move(){
  //obj=document.getElementById("dv1");
  var tecla = event.keyCode;
  //37=Esquerda -38=Cima 
  //39=direita -40= baixo
  //13 = enter
  if(tecla==37){
    px-=velo;
    obj.style.left=px+"px";
  }else if(tecla==38){
    py-=velo;
    obj.style.top=py+"px";
  }else if(tecla==39){
    px+=velo;
    obj.style.left=px+"px";
  }else if(tecla== 40){
    py+=velo;
    obj.style.top=py+"px";
  }else if(tecla== 13){
    obj.style.backgroundColor ="#fff";
    alert("Evento Keydown Removido");
    this.removeEventListener("keydown",move);
    
  }

}
function iniciar(){
  obj=document.getElementById("dv1");
  obj.addEventListener("click",adicionaEvento);
}

function adicionaEvento(){
  alert("Evento adicionado");
  document.addEventListener("keydown",move);
  obj.style.backgroundColor = "#f00";
}

window.addEventListener("load",iniciar);

