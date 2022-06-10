/*
//Assuntos: Constructor Functions          

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

//Pascal Casa - UmDoisTresQuatro

function Celular (marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function () {
        console.log('Fazendo Ligação...');
    }
}

const celular = new Celular('ASUS', 5.5, 5000);
console.log(celular);

*/
 
function Computador (processador, placaMae, memoriaRam, ssd, placaDeVideo,  gabinete) {
        this.processador = processador,
        this.placaMae = placaMae,
        this.memoriaRam = memoriaRam,
        this.ssd = ssd,
        this.placaDeVideo = placaDeVideo,
        this.gabinete = gabinete
        this.ligar = function () {
            console.log('Dando boot no sistema...');
        }
}

const computador = new Computador('Ryzen 5 1500x', 'B450 AORUS ELITE', 'Crucial 16GB (2 x 8GB) 3000Mhz', 
'SSD XPG GAMMIX S50 Lite 512GB', 'GTX 1050 TI - EVGA', 'NZXT H510');
console.log(computador);