class Matrix {
    constructor(linha, coluna) {
        this.linha = linha;
        this.coluna = coluna;

        this.data = [];

        for (let i = 0; i < linha; i++) {
            let arr = []
            for (let j = 0; j < coluna; j++) {
                arr.push(0)
            }
            this.data.push(arr);
        }
    }

    // Funções Diversas

    static arrayParaMatrix(arr) {
        let matrix = new Matrix(arr.length, 1);
        matrix.map((elm, i, j) => {
            return arr[i];
        })
        return matrix;
    }

    static MatrixParaArray(obj) {
        let arr = []
        obj.map((elm, i, j) => {
            arr.push(elm);
        })
        return arr;
    }

    print() {
        console.table(this.data);
    }

    randomize() {
        this.map((elm, i, j) => {
            return Math.random() * 2 - 1;
        });
    }

    static map(A, func) {
        let matrix = new Matrix(A.linha, A.coluna);

        matrix.data = A.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })

        return matrix;
    }

    map(func) {

        this.data = this.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })

        return this;
    }

    static transpor(A){
        var matrix = new Matrix(A.coluna, A.linha);
        matrix.map((num,i,j) => {
            return A.data[j][i];
        });
        return matrix;
    }

    // Operações Estáticas Matriz x Escalar 
    
    static escalar_multiplica(A, escalar) {
        var matrix = new Matrix(A.linha, A.coluna);

        matrix.map((num, i, j) => {
            return A.data[i][j] * escalar;
        });

        return matrix;
    }
    
    // Operações Estáticas Matriz x Matriz

    static hadamard(A, B) {
        var matrix = new Matrix(A.linha, A.coluna);

        matrix.map((num, i, j) => {
            return A.data[i][j] * B.data[i][j]
        });

        return matrix;
    }

    static add(A, B) {
        var matrix = new Matrix(A.linha, A.coluna);

        matrix.map((num, i, j) => {
            return A.data[i][j] + B.data[i][j]
        });

        return matrix;
    }

    static subtracao(A, B) {
        var matrix = new Matrix(A.linha, A.coluna);

        matrix.map((num, i, j) => {
            return A.data[i][j] - B.data[i][j]
        });

        return matrix;
    }

    static multiplica(A, B) {
        var matrix = new Matrix(A.linha, B.coluna);

        matrix.map((num, i, j) => {
            let soma = 0
            for (let k = 0; k < A.coluna; k++) {
                let elm1 = A.data[i][k];
                let elm2 = B.data[k][j];
                soma += elm1 * elm2;
            }
            
            return soma;
        })

        return matrix;
    }
}