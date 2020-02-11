function restart(){
    i=0;
    for(let j = 0 ; j<bola.length;j++){
        bola.shift();
    }
    raquete.update(raquete);
    score=0;
    tentativas=3;
    maiorscore=0;
}

function printar(){
    fill(0,255,255);
    textSize(24);
    text("Score: " + maiorscore, 10, 25);

    fill(0,255,255);
    textSize(24);
    text("Gene: " +contador , 10, 50
    )
}