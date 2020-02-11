function configuracao(){
    let receptor
    for(let i = 0; i<bola.length; i++){
        bola[i].draw();
        bola[i].move();
        if(bola[i].VerificaChao()==true){
            bola.shift();
                
                perde = true;
                restart();
        }
    }

    if(frameCount%60== 0){
        bola.push(new Bola);
        //if(perde){
          //  perde = false;
        //}
    }
}


function verifica(){

    for(let i = 0 ; i<QTD;i++){
        if(bola[0].VerificaRaquete(genoma[i],)==true){
            genoma[i].score+=1;   
            
        }
    }return genoma
}



