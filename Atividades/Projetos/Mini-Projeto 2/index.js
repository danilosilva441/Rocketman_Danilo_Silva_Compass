/*
//Assuntos:   (Mini-Projeto 2) 


// Proposta: Escrever uma função que usa 2 números e retorna o maior entre eles
*/


const num = [5, 100, 500, 101, 1014, 7];
let c = 0;

for (const element of num){
    if (element > c){
        c = element;
    }
}

console.log(c);

