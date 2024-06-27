let numeroSecreto = gerarNumeroAleatorio();


function exibirTextoNaTela(tag,texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


// Função para relizar uma ação
function verificarChute(){
    let chute = document.querySelector('input');
    console.log(numeroSecreto == chute);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}