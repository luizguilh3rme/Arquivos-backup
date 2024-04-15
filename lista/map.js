let aluno = [
    {
        "nome":"Vanessa Santos Souza",
        "img":"img/person-fill-exclamation.svg",
        "descricao":"CPF: 98765553212 <br/> Pai: João Batista <br/> Mãe: Maria Adriana <br/> Naturalidade: Estância/SE"
    },
    {
        "nome":"Gerivaldo Santos Santana",
        "img":"img/person-fill-exclamation.svg",
        "descricao":"CPF: 14317693696 <br/> Pai: Jose Eduardo <br/> Mãe: Maria Cristina <br/> Naturalidade: Estância/SE"
    },
    {
        "nome":"Gerivaldo Santos Santana",
        "img":"img/person-fill-exclamation.svg",
        "descricao":"CPF: 14317693696 <br/> Pai: Jose Eduardo <br/> Mãe: Maria Cristina <br/> Naturalidade: Estância/SE"
    },
    {
        "nome":"Gerivaldo Santos Santana",
        "img":"img/person-fill-exclamation.svg",
        "descricao":"CPF: 14317693696 <br/> Pai: Jose Eduardo <br/> Mãe: Maria Cristina <br/> Naturalidade: Estância/SE"
    }
]

let pai = [
{
    "nome2":"Elizabete da Silva",
    "img2":"img/6326055.png",
    "descricao2":"CPF:98765553212 <br/> Pai:João Batista <br/> Mãe:Maria Adriana <br/> Naturalidade: Estância/SE"
},
    {
    "nome2":"Jose Santana",
    "img2":"img/6326055.png",
    "descricao2":"CPF:14317693696 <br/> Pai:Jose Eduardo <br/> Mãe:Maria Cristina <br/> Naturalidade: Estância/SE"
    }
]

function alunos(){
    document.getElementById("all").style.display='none';
    let voltar = document.getElementById("voltar");
    voltar.style.display = 'block';

    aluno.map((lista, posicao) => {
        let cardAnime = document.getElementById("cards");
        cardAnime.innerHTML += ` <div class="col-md-4">
                    <div class="card m-2" style="background-color:#212529;">
                        <img src="${lista.img}" class="card-img-top" height="200px" alt="...">
                        <div class="card-body">
                          <h5 class="card-title nome" style="margin-bottom:20px;color:white">${lista.nome}</h5>
                          <a href="#" class="btn btn-secondary descricao" onclick="zoomImg('${posicao}')">Ver mais <i class="bi bi-search"></i></a>
                        </div>
                      </div>
                </div>`
                
    });

    
    
}

// function voltar(){
//     let A = document.getElementById("cards");
//     let B = document.getElementById("all");
//     A.style.display = 'none';

//     if(A.style.display == 'none'){

//         B.style.display = 'block'
//     }

//     else{
//         A.style.display == 'none'
//     }
// }

let voltar = document.getElementById("voltar");
voltar.addEventListener('click',() => {
    location.reload()
});


function zoomImg(posicao){  
    let animeSelecionado = aluno[posicao];
    document.getElementById("nomeAnime").innerHTML = animeSelecionado.nome;
    document.getElementById("descricaoAnime").innerHTML = animeSelecionado.descricao;
    document.getElementById("imgModal").src = animeSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}




function pais(){
    document.getElementById("all").style.display='none';

    pai.map((lista2, posicao2) => {
        let cardAnime2 = document.getElementById("cards2");
        cardAnime2.innerHTML += ` <div class="col-md-4">
                    <div class="card m-2" style="background-color:#212529;">
                        <img src="${lista2.img2}" class="card-img-top" height="200px" alt="...">
                        <div class="card-body">
                          <h5 class="card-title nome" style="margin-bottom:20px;color:white">${lista2.nome2}</h5>
                          <a href="#" class="btn btn-secondary descricao" onclick="zoomImg2('${posicao2}')">Ver mais <i class="bi bi-search"></i></a>
                        </div>
                      </div>
                </div>`
                
    });
    
}


function zoomImg2(posicao2){  
    let animeSelecionado2 = pai[posicao2];
    document.getElementById("nomeAnime2").innerHTML = animeSelecionado2.nome2;
    document.getElementById("descricaoAnime2").innerHTML = animeSelecionado2.descricao2;
    document.getElementById("imgModal2").src = animeSelecionado2.img2;

    new bootstrap.Modal('#zoomImg2').show();
}