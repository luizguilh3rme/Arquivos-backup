const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //refatorou essa função no desselecionar
        // const botaoSelecionado = document.querySelector(".botao.selecionado");
        // botaoSelecionado.classList.remove("selecionado");

        desselecionar();

        botao.classList.add("selecionado");


        //refatorou essa função no desselecionarPersonagem
        // const personagemSelecionado = document.querySelector(".personagem.selecionado");
        // personagemSelecionado.classList.remove("selecionado");

        desselecionarPersonagem();
        
        personagens[indice].classList.add("selecionado");
        
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionar() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
