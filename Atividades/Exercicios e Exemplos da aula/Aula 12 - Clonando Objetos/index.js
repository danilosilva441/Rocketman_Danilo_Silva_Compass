/*
//Assuntos: Clonando Objetos  

//__________________________________________________________________________________________            
//Exemplos da Aula: 


const celular  = {
    marcaCelular : 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function () {
        console.log("Fazendo ligação...");
    }
}

const novoObjeto = Object.assign({
    bateria: 5000
}, celular);
console.log(novoObjeto);

const objeto2 = {...celular};
console.log(objeto2);

*/
//-----

const computador = {
    processador : 'Ryzen 5 1500x', 
    placaMae : 'B450 AORUS ELITE', 
    memoriaRam : 'Crucial 16GB (2 x 8GB) 3000Mhz', 
    ssd : 'SSD XPG GAMMIX S50 Lite 512GB', 
    placaDeVideo : 'GTX 1050 TI - EVGA',  
    gabinete : 'NZXT H510'
}


const novoComputador = Object.assign({
    fonte : 'Corsair 650w'
}, computador);
console.log(novoComputador);

const computador2 = {...computador};
console.log(computador2);