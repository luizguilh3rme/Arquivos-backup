//Classe é a padronização de formato d euma estrutura de dados
//Objeto mantem a padronização da forma (classe) e implementa seus valores das propriedades


//Pode colocar funções dentro das classes
class formaDeBolo{
    constructor(saborDaMassa, saborDoRecheio, precoBolo, tamanhoBolo, img){
        this.saborDaMassa = saborDaMassa;
        this.saborDoRecheio = saborDoRecheio;
        this.precoBolo = precoBolo;
        this.tamanhoBolo = tamanhoBolo;
        this.img = img;
    }
    //escreve função sem o nome "function"
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
    }
    //escreve função sem o nome "function"
    assar(){
        console.log(`Assando o bolo de ${this.saborDaMassa}`)
    }

    

    card(posicao){
        
        let = cardBolo.innerHTML += ` <div class="col-md-4">
                <div class="card m-2" style="background-color:#212529;">
                    <img src="${this.img}" class="card-img-top" height="200px" alt="...">
                    <div class="card-body">
                      <h5 class="card-title nome" style="margin-bottom:20px;">${this.saborDaMassa}</h5>
                      <a href="#" class="btn btn-secondary descricao" onclick="zoomImg('${posicao}')">Ver mais <i class="bi bi-search"></i></a>
                    </div>
                  </div>
            </div>`
    }

    zoomImg(posicao){  
        let animeSelecionado = listaAnimes[posicao];
        document.getElementById("nomeAnime").innerHTML = animeSelecionado.nome;
        document.getElementById("descricaoAnime").innerHTML = animeSelecionado.descricao;
        document.getElementById("imgModal").src = animeSelecionado.img;
    
        new bootstrap.Modal('#zoomImg').show();
    }
}

//Colocando objetos dentro das classes
let boloFesta = new formaDeBolo("Chocolate", "Nutella", "R$ 25.50", "Tamanho médio", "img/dragon-ball-super-hd-wallpaper_LlIEmuFS.jpg");
let boloPremium = new formaDeBolo("Baunilha", "Limão");

//alterando o valor de sabor da massa
boloFesta.saborDaMassa = "Amendoim";







boloFesta.escrever();
boloPremium.escrever();
boloPremium.assar();