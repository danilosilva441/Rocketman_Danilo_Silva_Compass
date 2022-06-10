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
/*
Exemplos da Aula

Assunto: Tipos de Funções 


// Realizar uma tarefa, não devolver nada

function dizerNome(){
    console.log('jhonatan');
};

dizerNome();
//Faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor){
    return valor * 2;
};

//console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(5);
console.log(resultado);
*/


//---------------------------------------------------------------------
//Exercicio


let nomeCompleto = "Danilo Silva Souza";


function nomeAbreviado(primeiroNome, segundoNomeAbr){
    nomeCompleto = primeiroNome + ' ' + segundoNomeAbr;
}

console.log(nomeCompleto);
nomeAbreviado("Danilo", "S Souza");
console.log(nomeCompleto);



