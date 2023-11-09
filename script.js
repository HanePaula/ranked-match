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
        resposta.dataset.nome = resposta.value;

        formularioTexto.innerText = 'Quanto de experiência possui o herói?';
        botao.innerText = 'Ver nível';

        resposta.value = '';

    }

    else if (contadorRespostas === 2) {
        resposta.dataset.xp = resposta.value;
        let nome = resposta.dataset.nome;
        let xp = parseInt(resposta.dataset.xp);
        let nivel = '';

        if (xp <= 1000) {
            nivel = 'Ferro';
        }

        else if (xp > 1000 && xp <= 2000) {
            nivel = 'Bronze';
        }

        else if (xp > 2000 && xp <= 6000) {
            nivel = 'Prata';
        }

        else if (xp > 6000 && xp <= 7000) {
            nivel = 'Ouro';
        }

        else if (xp > 7000 && xp <= 8000) {
            nivel = 'Platina';
        }

        else if (xp > 8000 && xp <= 9000) {
            nivel = 'Ascendente';
        }

        else if (xp > 9000 && xp <= 10000) {
            nivel = 'Imortal';
        }

        else if (xp > 10000) {
            nivel = 'Radiante';
        }

        apresentacao.removeChild(apresentacao.children[1]);

        const divNova = document.createElement('div');
        divNova.className = "apresentacao-formulario";
        divNova.innerHTML = `<h2 class="formulario-titulo">O herói de nome ${nome} está no nível de ${nivel}</h2>
        <button class="formulario-botao" id="botao-reload">Novo Herói</button>`

        apresentacao.appendChild(divNova);

        const botao = document.getElementById('botao-reload');

        botao.addEventListener('click', (aperta) => {
            aperta.preventDefault();
            window.location.reload();
        })
    }
})