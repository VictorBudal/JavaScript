function sigmoide(x) {
    return 1 / (1 + Math.exp(-x));
}

function dsigmoide(x){
    return x * (1-x); 
}

class RedeNeural {
    constructor(e_nodes, o_nodes, s_nodes) {
        this.e_nodes = e_nodes;
        this.o_nodes = o_nodes;
        this.s_nodes = s_nodes;

        this.bias_eO = new Matrix(this.o_nodes, 1);
        this.bias_eO.randomize();
        this.bias_oS = new Matrix(this.s_nodes, 1);
        this.bias_oS.randomize();

        this.pesos_eO = new Matrix(this.o_nodes, this.e_nodes);
        this.pesos_eO.randomize()

        this.pesos_oS = new Matrix(this.s_nodes, this.o_nodes)
        this.pesos_oS.randomize()

        this.taxa_aprender = 0.1;
    }

    CriandoRede(arr) {
        // entrada >> oculta
        let entrada = Matrix.arrayParaMatrix(arr);
        let oculta = Matrix.multiplica(this.pesos_eO, entrada);
        oculta = Matrix.add(oculta, this.bias_eO);

        oculta.map(sigmoide)

        // oculta >> saida

        let saida = Matrix.multiplica(this.pesos_oS, oculta);
        saida = Matrix.add(saida, this.bias_oS);
        saida.map(sigmoide);

        

    }
}