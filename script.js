const formulario = document.getElementById('form');
const resposta = document.getElementById('resposta');
const formularioTexto = document.getElementById('form-texto');
const formularioBotao = document.getElementById('botao');
const apresentacao = document.getElementById('apresentacao');
let contadorRespostas = 0;

formulario.addEventListener('submit', (submit) => {
    submit.preventDefault();
    contadorRespostas++;
    if (contadorRespostas === 1) {
        resposta.dataset.vitorias = resposta.value;

        formularioTexto.innerText = 'Quantas derrotas seu herói teve?';
        botao.innerText = 'Ver saldo';

        resposta.value = '';

    }

    else if (contadorRespostas === 2) {
        resposta.dataset.derrotas = resposta.value;
        let vitorias = parseInt(resposta.dataset.vitorias);
        let derrotas = parseInt(resposta.dataset.derrotas);
        let nivel = '';
        let saldoRankeadas = calculaSaldo(vitorias, derrotas);

        if (saldoRankeadas <= 10) {
            nivel = 'Ferro';
        }

        else if (saldoRankeadas > 10 && saldoRankeadas <= 20) {
            nivel = 'Bronze';
        }

        else if (saldoRankeadas > 20 && saldoRankeadas <= 50) {
            nivel = 'Prata';
        }

        else if (saldoRankeadas > 50 && saldoRankeadas <= 80) {
            nivel = 'Ouro';
        }

        else if (saldoRankeadas > 80 && saldoRankeadas <= 90) {
            nivel = 'Diamante';
        }

        else if (saldoRankeadas > 90 && saldoRankeadas <= 100) {
            nivel = 'Lendário';
        }

        else if (saldoRankeadas > 100) {
            nivel = 'Imortal';
        }

        apresentacao.removeChild(apresentacao.children[1]);

        const divNova = document.createElement('div');
        divNova.className = "apresentacao-formulario";
        divNova.innerHTML = `<h2 class="formulario-titulo">O herói de saldo ${saldoRankeadas} está no nível de ${nivel}</h2>
        <button class="formulario-botao" id="botao-reload">Novo Herói</button>`

        apresentacao.appendChild(divNova);

        const botao = document.getElementById('botao-reload');

        botao.addEventListener('click', (aperta) => {
            aperta.preventDefault();
            window.location.reload();
        })
    }

    function calculaSaldo(vitorias, derrotas) {
        let saldoRankeadas = vitorias - derrotas;

        return saldoRankeadas;
    }
})