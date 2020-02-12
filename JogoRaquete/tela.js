function restart(){
  score=0;
  tentativas=3;
}

function printar(){
  fill(0,255,255);
  textSize(24);
  text("Score: " + score, 10, 25);
  text("Tentativas: " + tentativas, 10, 50);
}

function derrota(){
  fill(0,255,255);
  textSize(24);
  text("YOU LOSE",400,500);

}