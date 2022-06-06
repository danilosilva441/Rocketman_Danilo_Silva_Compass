/*
//Assuntos:   Operadores aritiméticos(matematicos)
//            Operadores de Atribuição
//            Operadores de Compração
//            Operadores Lógicos
//            operadores Bitwise


//__________________________________________________________________________________________            
//Exemplos da Aula: Operadores Aritiméticos

let salario = 100;

// +, -, *, /, **

console.log(salario + salario); //Soma
console.log(salario - salario); //Subtração
console.log(salario * salario); //Multiplicação
console.log(salario / salario); //Divisão
console.log(salario ** salario); //Exponencial
console.log(5 ** 5); //Exponencial

// ++ e --

let idade = 18;
console.log(idade--);
console.log(idade);
console.log(++idade);


//__________________________________________________________________________________________            
//Exemplos da Aula: Operadores de Atribuição

let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer; // valorTecladoGamer = valorTecladogamer + valorTecladoGamer
console.log(valorTecladoGamer);

valorTecladoGamer -= valorTecladoGamer; // valorTecladoGamer = valorTecladogamer - valorTecladoGamer
console.log(valorTecladoGamer);


//__________________________________________________________________________________________            
//Exemplos da Aula: Operadores de Igualdade

//                   Igualdade Estrita

console.log(1 === 1);
console.log( '1' === 1);

//                   Igualdade Solta

console.log(1 == 1);
console.log( '1' == 1); //Não é muito recomendado


//__________________________________________________________________________________________            
//Exemplos da Aula: Operador Ternário

//Cliente:
//Comum 0 a 100
//Premium 101+

let pontos = 200;
//             Lógica   |     V     |    F
let tipo = pontos > 100 ? 'Premium' : 'Comum'
console.log(tipo);


//__________________________________________________________________________________________            
//Exemplos da Aula: Operadores Lógicos

//              Operador:  E == (&&)

console.log(true  && true);
console.log(true  && false);
console.log(false && true);
console.log(false && false);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

//              Operador:  OU == (||)

console.log(true  || true);
console.log(true  || false);
console.log(false || true);
console.log(false || false);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log(podeAplicar);

//              Operador:  NOT == (!)
*/
console.log(true   && !true);
console.log(true   && !false);


let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log('Pode aplicar: ', podeAplicar);

let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado!', candidatoRecusado);


//---------------------------------------------------------------------


//Exercicio



