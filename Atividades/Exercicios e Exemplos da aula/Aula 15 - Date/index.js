/*
//Assuntos: Date

//__________________________________________________________________________________________            
//Exemplos da Aula: 
*/

//Date
const data1 = new Date();

const data2 = new Date('10 Junho 2022 13:10');

const data3 = new Date(2019, 03, 06, 9, 30);

data3.setFullYear(2030);

//data2.toDateString() - retorna data em string, no console do navegador.
//data2.ToTimeString() - retorna informações do GMT de tempo local
//data2.ToISOString() - retorno o formato de como deve ficar no banco de dados/servidor.