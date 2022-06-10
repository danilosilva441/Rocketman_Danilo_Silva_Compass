/*
//Assuntos: Factory Functions  (Função de Fábrica)          

//__________________________________________________________________________________________            
//Exemplos da Aula: 


//-----

function criarCelular (marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar  () {
            console.log("Fazendo ligação...")
        } 
    }
}

const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);

*/
 
function criarPC (processador, placaMae, memoriaRam, ssd, placaDeVideo,  gabinete) {
    return {
        processador,
        placaMae,
        memoriaRam,
        ssd,
        placaDeVideo,
        gabinete
    }
}

const pc1 = criarPC('Ryzen 5 1500x', 'B450 AORUS ELITE', 'Crucial 16GB (2 x 8GB) 3000Mhz', 
'SSD XPG GAMMIX S50 Lite 512GB', 'GTX 1050 TI - EVGA', 'NZXT H510');
console.log(pc1);