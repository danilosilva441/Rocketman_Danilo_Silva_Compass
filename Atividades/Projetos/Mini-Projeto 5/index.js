/*
//Assuntos:   (Mini-Projeto 5) 


// Proposta: Par ou Impar

// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é PAR ou IMPAR

*/

exibirTipo(5);

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++){
        if (i % 2 === 0)
            console.log(i, 'PAR');
        else 
            console.log(i, 'IMPAR');
    }
}




