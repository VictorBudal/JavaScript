var jogador;
var bola=[];

var score=0;
var tentativas=3;

function setup(){
  createCanvas(600, 300);
  jogador = new Raquete();
  bola.push(new Bola);
}

function draw(){
  background(0);
  jogador.draw();
  jogador.move();
  bola[0].draw();
  bola[0].mover();
  
  printar();
  configuracao();

}