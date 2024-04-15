let num1 = prompt ("Digite o primeiro número:");
let num2 = prompt ("Digite o segundo número:");
let operacao = prompt("Digite o simbolo da sua operação");

let resultadoOperacao = RealizaOperacao (num1,num2, operacao)

alert (`O resultado da operação é ${resultadoOperacao}`)

function RealizaOperacao (num1,num2, operacao){
    let resultado = 0;

    resultado = eval(num1 + operacao + num2);
    return resultado;
}


