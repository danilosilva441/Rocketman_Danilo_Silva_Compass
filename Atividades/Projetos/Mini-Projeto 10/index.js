/*
//Assuntos:   (Mini-Projeto 10) 


// Proposta: Números Primos

// Criar uma função para mostrar os números primos

// Primos 
// Compostos


*/

exibirNumerosPrimos(15)
function exibirNumerosPrimos(limite){
    for (let numero = 2; numero <= limite; numero++){
        if (NumeroPrimo(numero)) console.log(numero);
    }
}

function NumeroPrimo(numero){
    let ehPrimo = true;
    for (let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor === 0){
            return false;
        }
    }
    return true;
}






