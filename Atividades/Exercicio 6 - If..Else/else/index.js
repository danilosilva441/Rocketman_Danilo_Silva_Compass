/*
//Assuntos: If.. Else

//__________________________________________________________________________________________            
//Exemplos da Aula:
*/
//Se a hora estiver entre 06:00 até 12:00 = Bom dia!
//Se estiver entre 12:00 até 18:00 = Boa tarde!
//Caso contrário = Boa note!

let hora = 12;

if (hora >= 6 && hora < 12) {
    console.log("Bom dia!");
} 
else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde!")
} 
else {
    console.log("Boa noite!")
};


//__________________________________________________________________________________________            
//Exemplos da Aula: Switch.. Case


let permissao = "Gerente"; //Comum, gerente, diretor

switch (permissao){
    case 'Comum':
        console.log('Usuario Comum');
        break;
    case 'Gerente':
        console.log('Usuario Gerente');
        break;
    case 'Diretor':
        console.log('Usuario Diretor');
        break;
    default:
        console.log('Usuário não reconhecido!')
}

//---------------------------------------------------------------------





 