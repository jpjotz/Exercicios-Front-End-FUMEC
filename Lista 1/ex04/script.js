const tabuada = document.getElementById('tabuada');
const button = document.getElementById('enviar');
const limparBtn = document.getElementById('limpar');

limparBtn.addEventListener('click', () => {
    tabuada.textContent = '';
});

button.addEventListener('click', () => {
    const numero = Number(document.getElementById('numero').value);

    for (let i = 1; i <= 10; i++) {
        const linha = document.createElement('div');

        const soma = document.createElement('span');
        const subtracao = document.createElement('span');
        const multiplicacao = document.createElement('span');
        const divisao = document.createElement('span');

        const resultadoSoma = numero + i;
        const resultadoSubtracao = numero - i;
        const resultadoMultiplicacao = numero * i;
        const resultadoDivisao = (numero / i).toFixed(2);

        soma.textContent = `${numero} + ${i} = ${resultadoSoma}`;
        subtracao.textContent = `${numero} - ${i} = ${resultadoSubtracao}`;
        multiplicacao.textContent = `${numero} × ${i} = ${resultadoMultiplicacao}`;
        divisao.textContent = `${numero} ÷ ${i} = ${resultadoDivisao}`;

        linha.appendChild(soma);
        linha.appendChild(subtracao);
        linha.appendChild(multiplicacao);
        linha.appendChild(divisao);

        tabuada.appendChild(linha);
    }
});