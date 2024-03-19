function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
    
    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(numeroInicial, numeroFinal);

        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(numeroInicial, numeroFinal);
        }
        sorteados.push(numero);
    }

    
    let resultado = document.getElementById('resultado');
    let sorte = quantidade > 1 ? 'Sorteados' : "Sorteado";
    resultado.innerHTML = `<label class="texto__paragrafo">Números ${sorte}:  ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
    
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}