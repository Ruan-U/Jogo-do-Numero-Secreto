//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Japanese Male', {rate:1.2}); /*Em vez dele, vamos usar:*/
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
        exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++; // tentativas = tentativas + 1;
        limparCampo();
    }
}

function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true);
}





/* Atividade

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;  
let nota4 = 5;

let media = calcularMedia(nota1, nota2, nota3, nota4);

function calcularMedia(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4;
};

//function calcularMedia(nota1, nota2, nota3, nota4) {
//    let media = (nota1 + nota2 + nota3 + nota4) / 4;
//    return media;
//  }

alert('A média é ' + media + '.');

function verificarAprovação(media) {
    if (media >= 5) {
        alert('Aprovado');
    } else {
        alert('Reprovado');
    }
}

function verificarAprovação(media) {
    return media >=5 ? 'Aprovado' : 'Reprovado';
}

let aprovação = verificarAprovação(media);
alert(aprovação);


Atividade */

















//-----------------------------------------------------------------------------

let cidade
function perguntaCidade() {
    cidade = prompt('Diga uma cidade do Brasil.');
    alert(`Estive em ${cidade} e lembrei de você, ${nome}!`)
}

let nome = prompt('Qual o seu nome?');

function exibeTexto() {
    if (!nome) /*Resumo de (nome === null || nome === undefined || nome === '')*/   {
        nome = 'Ser misterioso';
    }
    alert('Olá, ' + nome + '.');
}

let numeroMultiplicado = 0

function multiplicaNumeros(numeroQualquer) {
    numeroMultiplicado = numeroQualquer * numeroQualquer;
    alert(`${numeroQualquer} vezes ${numeroQualquer} é ${numeroMultiplicado}.`);
    return numeroMultiplicado;
}

exibeTexto()
multiplicaNumeros(prompt('Digite um número qualquer.'))

//-----------------------------------------------------------------------------
