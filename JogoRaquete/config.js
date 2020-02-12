function configuracao(){

  if(frameCount%60== 0){
    bola.push(new Bola);
  }

  if(bola[0].verificaChao()){
    tentativas-=1;
    bola.shift();
  }

  if(bola[0].verificaRaquete(jogador)){
    bola.shift();
    score+=1;
  }

  if(tentativas==0){
    alert("Tente novamente");
    restart();
    
  }

}