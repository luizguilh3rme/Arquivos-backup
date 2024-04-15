function mais(){
    let C = document.getElementById("conteudo");
    let A = document.getElementById("operacao");
    let r1 = document.getElementById("result1");
    let voltar = document.getElementById("voltar");
    A.style.display = 'block';
    C.style.display = 'none';
    r1.style.display = 'block';
    voltar.style.display = 'block';
}

function menos(){
    let C = document.getElementById("conteudo");
    let A = document.getElementById("operacao");
    let r2 = document.getElementById("result2");
    let voltar = document.getElementById("voltar");
    A.style.display = 'block';
    C.style.display = 'none';
    r2.style.display = 'block';
    voltar.style.display = 'block';
}

function vezes(){
    let C = document.getElementById("conteudo");
    let A = document.getElementById("operacao");
    let r3 = document.getElementById("result3");
    let voltar = document.getElementById("voltar");
    A.style.display = 'block';
    C.style.display = 'none';
    r3.style.display = 'block';
    voltar.style.display = 'block';
}

function divi(){
    let C = document.getElementById("conteudo");
    let A = document.getElementById("operacao");
    let r4 = document.getElementById("result4");
    let voltar = document.getElementById("voltar");
    A.style.display = 'block';
    C.style.display = 'none';
    r4.style.display = 'block';
    voltar.style.display = 'block';
}

function result1(){
        let n1 = document.getElementById("num1").value;
        let n2 = document.getElementById("num2").value;
        let resultado1 = parseInt(n1) + parseInt(n2);
        document.getElementById("resultado").innerText = `O resultado é igual a ${resultado1}`;
}

function result2(){
    let n3 = document.getElementById("num1").value;
    let n4 = document.getElementById("num2").value;
    let resultado2 = parseInt(n3) - parseInt(n4);
    document.getElementById("resultado").innerText = `O resultado é igual a ${resultado2}`;
}

function result3(){
    let n5 = document.getElementById("num1").value;
    let n6 = document.getElementById("num2").value;
    let resultado3 = parseInt(n5) * parseInt(n6);
    document.getElementById("resultado").innerText = `O resultado é igual a ${resultado3}`;
}

function result4(){
    let n7 = document.getElementById("num1").value;
    let n8 = document.getElementById("num2").value;
    let resultado4 = parseInt(n7) / parseInt(n8);
    document.getElementById("resultado").innerText = `O resultado é igual a ${resultado4}`;
}

let voltar = document.getElementById("voltar");
voltar.addEventListener('click',() => {
    location.reload()
});
// function voltar(){
//     let back = document.getElementById("voltar");
//     let C = document.getElementById("conteudo");
//     let A = document.getElementById("operacao");
//     let result1 = document.getElementById("result1");
//     let result2 = document.getElementById("result2");
//     let result3 = document.getElementById("result3");
//     let result4 = document.getElementById("result4");
//     let resul = document.getElementById("resultado");
//     C.style.display = 'block';
//     A.style.display = 'none';
    
// }

