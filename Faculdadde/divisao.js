let numero1 = prompt("Digite primeiro numero");
        let numero2 = prompt("Digite o segundo numero");

      let resultadoDivi = divida (numero1,numero2);

      alert('O resultado da divisão é ' + resultadoDivi);

       function divida (numero1, numero2){
          let resultado = 0;

           resultado = numero1/numero2;
           return resultado;
}



