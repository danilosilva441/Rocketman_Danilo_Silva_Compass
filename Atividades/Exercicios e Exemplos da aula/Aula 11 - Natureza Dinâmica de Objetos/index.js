/*
//Assuntos: Natureza dinâmica de Objetos      

//__________________________________________________________________________________________            
//Exemplos da Aula: 

*/
//-----


const mouse = {
    cor : 'red',
    marcar : 'dazz'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function () {
    console.log('mudando DPI');
}

delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);
