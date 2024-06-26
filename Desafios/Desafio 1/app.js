
// editar titulo página 
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// função para aparecer uma mesangem botão clicado
function botaoConsole(){
    console.log('O botão foi clicado');
}

// função para aparecer uma mesangem botão clicado
function botaoAlert(){
    alert('Eu amo JS')
}

// função para aparecer uma mesangem botão clicado
function botaoPrompt(){
    let cidadeBrasil = prompt('Digite um nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidadeBrasil} e lembrei de você`);
}


// função para aparecer uma mesangem botão clicado
function botaoSoma(){
    let numb1 = parseInt(prompt('Digite um numero inteiro'));
    let numb2 = parseInt(prompt('Digite o segundo numero inteiro'));

    let soma = numb1 + numb2;

    alert(`${numb1} + ${numb2} = ${soma}`);
}

