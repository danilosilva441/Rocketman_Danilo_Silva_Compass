/*
//Assuntos: Laços de repetição
            

//__________________________________________________________________________________________            
//Exemplos da Aula: For

for (let i = 0; i <= 5; i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}


//__________________________________________________________________________________________            
//Exemplos da Aula: While loop


let i = 5;

while (i >= 1) {
    if (i % 2 !== 0){
        console.log(i)
    }
    i--;
}


//__________________________________________________________________________________________            
//Exemplos da Aula: Do... While

let i = 0;

do {
    console.log('Digitando', i);
    i++
} while (i < 10);


//__________________________________________________________________________________________            
//Exemplos da Aula: For-in

const pessoa = {
    nome: 'Jhonatan',
    idade: 25
}

//Key-value
for(let chave in pessoa) {
    console.log(chave, pessoa);
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores) {
    console.log(indice, cores[indice]);
}


//__________________________________________________________________________________________            
//Exemplos da Aula: For-of

const cores = ['Vermelho', 'Azul', 'Verde'];

for(let cor of cores){
    console.log(cor);
}


*/
//---------------------------------------------------------------------

//Exercicio

const pets = ['Cachorro', 'Gato', 'Porquinho-da-índia', 'Peixinhos', 'Coelho', 'Piriquito']


for(let pet of pets){
    console.log(pet);
}

 