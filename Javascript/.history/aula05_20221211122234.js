function escreverNome(nome){
    return ('Meu nome é ' + nome);
}
escreverNome('Erick');

function verificarIdade(idade){
    if (idade >= 18){
        console.log(escreverNome ('Erick') + ' é Maior')
    } else {
        console.log('Menor')
    }
}

verificarIdade (18);



