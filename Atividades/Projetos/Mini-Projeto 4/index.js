/*
//Assuntos:   (Mini-Projeto 4) 


// Proposta: Medido de Velocidade

// Velocidade máxima: 70
// A cada 5km acima do limite você ganha 1 ponto
// Se pontos > 12 = "Carteira Suspensa"

*/

verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const PontosPorKm = 5;
    if ( velocidade <= velocidadeMaxima)
        console.log("Ok");
    else{
        const pontos = Math.floor((velocidade - velocidadeMaxima) / PontosPorKm);
        if (pontos >= 12)
            console.log("Carteira Suspensa");
        else    
            console.log("Pontos: ", pontos);
    }
}




