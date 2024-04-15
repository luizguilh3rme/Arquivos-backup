let msg = prompt("para ver a mensagem digite 1, para não ver a mensagem digite 2");

if(msg ==="1"){
    let NovoElemento = document.createElement("h2");
    NovoElemento.innerHTML = "Sou o novo elemento";
    document.body.appendChild(NovoElemento);
}


// document.body.appendChild(NovoElemento);