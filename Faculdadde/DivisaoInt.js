let numeros = [];

numeros [0] = SolicitarPrimeiroNumero();
numeros [1] = SolicitarSegundoNumero();

let resultadoDivisao = divida(numeros);

alert(`O resultado da divisão é: ${resultadoDivisao}`);

function SolicitarPrimeiroNumero(){
    let numero1 = prompt('Digite o primeiro número');

    if (numero1 < 0){
        alert('O número deve ser inteiro e positivo');

        return SolicitarPrimeiroNumero();
    } 
    else{
        return numero1;
    }
}

function SolicitarSegundoNumero(){
    let numero2 = prompt('Digite o segundo número');

    if(numero2 < 0 ){
        alert('O número deve ser inteiro e positivo');

        return SolicitarSegundoNumero();
    }
    else{
        return numero2;
    }
}

function divida(numeros){
    let resultado = 0;

    resultado = numeros[0] / numeros[1];
    return resultado;
}
