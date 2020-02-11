/*
Aqui vamos entender um pouco mais sobre loop e chamada 
de eventos.
*/

var temp;
var obj

function mudaCor(){
  
  var r=Math.floor(Math.random()*255);
  var g=Math.floor(Math.random()*255);
  var b=Math.floor(Math.random()*255);
  obj.style.backgroundColor="rgb("+r+","+g+","+b+")"
}
//Chamar a função em um loop
//var temp = setInterval(mudaCor,500);
//Depois de um tempo ele chama a função
//var Temp=setTimeout(mudaCor,500);

function iniciar(){
  temp = setInterval(mudaCor,500);
}

function parar(){
  clearInterval(temp);
}

function reset(){
  obj.style.backgroundColor="#fff";
  clearInterval(temp);
}

function addEventos(){
  document.getElementById("bt1").addEventListener("click",iniciar);
  document.getElementById("bt2").addEventListener("click",parar);
  document.getElementById("bt3").addEventListener("click",reset);
  obj=document.getElementById("dv1");
}

window.addEventListener("load",addEventos);

