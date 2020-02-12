class Raquete{
  constructor(){
   this.x=600/2;
   this.y=265;
   this.w=100;
   this.h=15;
   this.speed = 10;
   this.score=0;
  }
  draw(){
    fill(255);
    rect(this.x,this.y,this.w,this.h)
  }
  move(){
    if(keyIsDown(37)){
        this.x-=this.speed;
        }
    if(keyIsDown(39)){
        this.x+=this.speed;}
        
    if(this.x>600-this.w){
        this.x=600-this.w;
    }
    if(this.x<0){
        this.x=0;
    }
   }


}
