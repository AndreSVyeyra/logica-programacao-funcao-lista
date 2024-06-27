// função: exibir ola  mundo
function botaoConsole(){
    console.log('Olá mundo');
}


// Funçaõ: exibir nome no console
function botaoConsole2(nome){
   console.log(`Olá ${nome}!`)
}
botaoConsole2('André');


// função: exibir nubro do numerp
function numeroDobro(numb){
    let dobro = numb * 2;
    return dobro;
}
console.log(`Dobro: ${numeroDobro(4)}`);


// função: exibir a média dos numeros
function mediaNumero(numb1,numb2,numb3){
    let media = (numb1 + numb2 + numb3)/3;
    return media;
}

console.log(`Média: ${mediaNumero(2,5,8)}`);


// Funçaõ: mostrar número maior
function maiorNumero(numb1,numb2){
    if(numb1 > numb2){
        return console.log(`Número ${numb1} é maior`);
    }else
        return console.log(`Número ${numb2} é maior`);
}
maiorNumero(6,4);


// função: Retorna o numero multiplicado por ele mesmo
function numeroMult(numb1){
    let resultado = numb1 * numb1;
    return console.log(`Resultado: ${resultado}`);
}

numeroMult(7);


