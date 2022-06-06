/*
Exemplos da Aula

Assunto: Functions


// Verbo + Substantivo

let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + tonalidade;
};

console.log(corSite);
resetaCor("verde", " claro");
console.log(corSite);
//---------------------------------------------------------------------
*/

//Exercicio


let nomeCompleto = "Danilo Silva Souza";


function nomeAbreviado(primeiroNome, segundoNomeAbr){
    nomeCompleto = primeiroNome + ' ' + segundoNomeAbr;
};

console.log(nomeCompleto);
nomeAbreviado("Danilo", "S Souza");
console.log(nomeCompleto);
