//Chamando várias funções
// main()

// function main(){
//     getData();
//     checkValues();
//     sendToDataBase();
// }

// function getData(){
//     console.log("Pegando dados do usuário.");
// }

// function checkValues(){
//     console.log("Validando dados do usuário.")
// }

// function sendToDataBase(){
//     console.log("Cadastrando dados.")
// }


// //funçoes com parametros
// function torrar(pao) {
//     var mensagem = "Torrada feita com " + pao;
//     // Criar um elemento de parágrafo <p>
//     var paragrafo = document.createElement("p");
//     // Definir o texto do parágrafo como a mensagem
//     paragrafo.textContent = mensagem;
//     // Adicionar o parágrafo ao corpo do documento (DOM)
//     document.body.appendChild(paragrafo);
// }

// // Chamar a função torrar com diferentes tipos de pão
// torrar("pão de forma");
// torrar("pão integral");

function cli(tipo) {
    var div = document.getElementById("div");

    var mensagem = "Torrada feita com " + tipo;
    // Criar um elemento de parágrafo <p>
    var paragrafo = document.createElement("p");
    // Definir o texto do parágrafo como a mensagem
    paragrafo.textContent = mensagem;
    // Adicionar o parágrafo à div
    div.appendChild(paragrafo);
}

function exibirMensagem() {
    // Chamar a função cli com diferentes tipos de pão
    cli("pão de forma");
    cli("pão integral");

    // Ocultar o botão
    var botao = document.querySelector("button");
    botao.style.display = "none";
}