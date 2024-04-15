//somente console
console.log("Digite o nome do seu jogador");

let nickname = "Guilherme mestre";

console.log("Bem vindo" + nickname);


//saida de teste
let nameplay = prompt("Digite o nome do seu jogador");

let jog = document.getElementById("player").innerText = `Bem vindo(a) ${nameplay}`;

const mensagem = "Na cozinha da Vovó hoje tem:"


//Promocoes do dia
let poteCafe = "Café pilão R$ 14.50";
let poteAcucar = "Açucar cristal R$ 10.50";
let poteBiscoito = "Biscoito maizena R$ 8.50";

let potes = document.getElementById("potes-promocao").innerHTML = `<h3>Promoções do dia<h3/> 
<p>As promoções da cozinha da Vovó são:<br> <br>  ${poteCafe} <br>  
${poteAcucar} <br> ${poteBiscoito}<p/>`;

//produtos (tanto faz fazer chamando o ${} ou não😉)
poteCafe = "Café Maratá R$ 16.50";
poteAcucar = "Açucar Branco R$ 13.50";
poteBiscoito = "Biscoito Cream cracker R$ 8.50";

potes = document.getElementById("potes").innerText = `${mensagem} ` + poteCafe + ", " 
+ poteAcucar + " e " + poteBiscoito;


//nome, idade, numero de telefone, cpf, endereco, auxilio financeiro
//string = armazenar texto
//number = armazenar numeros
//boolean = armazenar valores logicos

let nomePessoa = "Josicreide";
let idade = 115;
let numeroTelefone = "79 99876-7152";
let cpf = "192.364.284-17";
let endereco = "Pov. Riachão do Teté, número 98";
let auxilioFinanceiro = true;


//remove o primeiro nome do vetor
let pokemon = ["Pikachu", "Charmander", "Bulbassaur"];
pokemon.shift()

console.log(pokemon);


//remove o ultimo nome do vetor
let pokemon = ["Pikachu", "Charmander", "Bulbassaur"];
pokemon.pop()

console.log(pokemon);


//listando nomes nos vetores
let nomePokemon = ["Pikachu", "Charmander", "Bulbassaur"];
let descricaoPokemon = [
    ["Pikachu", "M", "level 1"],
    ["Chamander", "M", "level 3"]
]
console.log("O pokemon " + descricaoPokemon[1][0] + "é do sexo " + descricaoPokemon[1][1] +
" e esá no nível " + descricaoPokemon[1][2]);


//vetores
function pokemon(){
    let mostrar = document.getElementById("mostrar");
    mostrar.innerHTML = `${pokemon}`;
}
let pokemon = ["Pikachu", "Charmander", "Bulbassaur"];


//length exibir o tamanho do vetor
console.log(nomePokemon.length);
