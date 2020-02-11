var bola= [];
var genoma=[];
var controle=false;

var maiorscore=0;
var score= new Array();

let perde = false;
var contador = 0;

var treinar = true;
var QTD = 12;

function setup(){
    createCanvas(600, 300);
    bola.push(new Bola);
    for (let i = 0 ; i<QTD  ; i++){
        genoma[i]=criarpop(QTD);

    }
    nn = new RedeNeural(4, 5, 2);
/*
    for(let i= 0 ; i<QTD;i++){
        entrada[0] = raquete[i].y;
        entrada[1] = raquete[i].speed;
        entrada[2] = bola[0].y;
        entrada[3] = bola[0].speed;
    }
    
    if (1) {
        raquete.moverParaDireita();
    } else if (0) {
        raquete.moverParaEsquerda();
    }*/
   
     
   
}

function draw() {
    background(0);
    
    
    configuracao();
    //ia(player,bola[0]);
    printar();
   
    desenhando(genoma);

    genoma[0].move();

    genoma=verifica(genoma,QTD);

}

