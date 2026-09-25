const anoNascimentoInput = document.getElementById('anoNascimento');
const verificarBtn = document.getElementById('verificar');
const resultado = document.getElementById('resultado');

verificarBtn.addEventListener('click', () => {
    if (anoNascimentoInput.value === '') {
        resultado.textContent = 'Digite seu ano de nascimento.';
        return;
    }

    const anoNascimento = Number(anoNascimentoInput.value);
    const anoAtual = new Date().getFullYear();

    if (anoNascimento > anoAtual || anoNascimento < 1900) {
        resultado.textContent = 'Digite um ano válido.';
        return;
    }

    const idade = anoAtual - anoNascimento;

    let classificacao;

    if (idade <= 12) {
        classificacao = 'Criança';
    } else if (idade <= 17) {
        classificacao = 'Adolescente';
    } else if (idade <= 59) {
        classificacao = 'Adulto';
    } else {
        classificacao = 'Idoso';
    }

    resultado.textContent = `Você tem aproximadamente ${idade} anos. Classificação: ${classificacao}.`;
});