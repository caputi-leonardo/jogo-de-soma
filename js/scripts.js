let resultado = document.getElementById('resultado');
let numeroCerto = document.getElementById('numeroCerto');
let descricaoPlace = document.getElementById('chute');
let tipoSoma = '';
let numeroSecreto;
let exibirConta = document.getElementById('exibirConta');
let intervaloTexto;
let tentativas = 1;
let primeiroNumero = '';
let segundoNumero = ';'
let pontuacao = 0;
let pontuacaoTexto = document.getElementById('pontuacao');


function numeroUm() {
    return parseInt(Math.random() * 1000 + 1);
}

function numeroDois() {
    return parseInt(Math.random() * 1000 + 1);
}

function novoJogo() {
    tipoSoma = document.getElementById('tipoSoma').value
    primeiroNumero = numeroUm();
    segundoNumero = numeroDois();
    numeroSecreto = tipoOperacao(primeiroNumero, segundoNumero, tipoSoma);
    let operadorEscolhido = operador(tipoSoma);
    document.getElementById('Comecar').setAttribute('disabled', false);
    document.getElementById('tipoSoma').setAttribute('disabled', false);
    document.getElementById('chute').removeAttribute('disabled');
    document.getElementById('chutar').removeAttribute('disabled');
    intervaloTexto = (`${primeiroNumero} ${operadorEscolhido} ${segundoNumero}`);
    exibirConta.innerHTML = intervaloTexto;
    resultado.innerHTML = ('');
    numeroCerto.innerHTML = ('');
    tentativas = 1;
}

function tipoOperacao(numeroUm, numeroDois, operador) {
    switch (operador) {
        case '1':
            return numeroUm + numeroDois;
        case '2':
            return numeroUm - numeroDois;
        case '3':
            return numeroUm * numeroDois;
        case '4':
            return (numeroUm / numeroDois).toFixed(2);
    }

}

function operador(operador) {
    switch (operador) {
        case '1':
            return '+';
        case '2':
            return '-';
        case '3':
            return '*';
        case '4':
            return '/';
    }

}

function chute() {
    let plural = tentativas > 1 ? 'tentativas' : 'tentativa';
    let numeroChute = document.getElementById('chute').value;

    if (numeroChute != 0) {
        if (numeroChute == numeroSecreto) {
            resultado.innerHTML = (`Parabéns!! Você acertou em ${tentativas} ${plural}`);
            numeroCerto.innerHTML = (`O Resultado era ${numeroSecreto}`);
            pontoJogo('acertou')
            fimJogo()
        } else {
            numeroCerto.innerHTML = (`Tente Novamente! Essa foi a ${tentativas}° tentativa`)
            pontoJogo('perdeu')
        }
        tentativas++;
        limparCampo()
    } else {
        alert('Informe um número para chute');
    }
}

function limparCampo() {
    campoChute = document.getElementById('chute');
    campoChute.value = '';
}

function pontoJogo(resultado) {
    switch (resultado) {
        case 'acertou':
            pontuacao++;
            break;
        case 'perdeu':
            pontuacao--;
    }
    
    let plural = pontuacao > 1 ? 'pontos' : 'ponto';
    pontuacaoTexto.innerHTML = (`Você tem ${pontuacao} ${plural}`)
}

function fimJogo() {
    document.getElementById('Comecar').removeAttribute('disabled');
    document.getElementById('tipoSoma').removeAttribute('disabled');
    document.getElementById('chute').setAttribute('disabled', true);
    document.getElementById('chutar').setAttribute('disabled', true);
    intervaloTexto = (` `);
    exibirConta.innerHTML = '';
    
}