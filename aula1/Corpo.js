/*
Aqui estou adicionando eventos para 
o meu div 
*/


function msg(){
  alert("Testando");
}

function cor(obj, cor){
  obj.style.backgroundColor = cor;
}



//inicializando eventos
function addEventos(){
  var obj = document.getElementById('dv1');
  obj.addEventListener("click",msg);
  obj.addEventListener("mouseover",function(event){
    cor(obj,"#fff");
  });
  obj.addEventListener("mouseout",function(event){
    cor(obj,"#f00");
  });
}
window.addEventListener("load",addEventos);