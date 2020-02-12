class Bola{
  constructor(){
       this.x=random(85,575);
       this.y=0;
       this.w=30;
       this.h=30;
       this.speed = 3;
  }
  draw(){
       fill(255);
       noStroke();
       ellipse(this.x,this.y,this.w,this.h);
  }

  mover(){
  this.y +=this.speed;

  }
  verificaChao(){
    if(this.y>300){
      return true;
    }else{
      return false;
    }
  }

  verificaRaquete(player){
    if(this.x>player.x-10 && this.x<player.x+player.w+10){
      if(this.y>player.y && this.y <player.y+5){
        return true;
      }return false;
    }return false;
}



}