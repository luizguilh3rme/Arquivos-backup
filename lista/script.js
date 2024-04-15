var aluno = {
    nome:"Vanessa Santos Souza <br/> Gerivaldo Santos Santana <br/> Rosilene dos Santos "
};

var pai = {
    nome:"Elizabete da Silva <br/> Viviane Batista de Jesus <br/> Manuela Barreto da Silva "
};


function alunos(){

    document.getElementById("titlealun").innerHTML=`<h2>Lista Alunos<h2/>`
    document.getElementById("contealun").innerHTML=`${aluno.nome}`;

}

function pais(){
    
     
    document.getElementById("titlepais").innerHTML=`<h2>Lista Pais<h2/>`
    document.getElementById("contepais").innerHTML=`${pai.nome}`;
}

function alunospais(){
     
     
    document.getElementById("titlealunpais").innerHTML=`<h2>Lista Alunos e Pais<h2/>`
    document.getElementById("contealunpais1").innerHTML=`${aluno.nome}`;
    document.getElementById("contealunpais2").innerHTML=`${pai.nome}`;
}

let voltar = document.getElementById("voltar");
voltar.addEventListener('click',() => {
    location.reload()
});