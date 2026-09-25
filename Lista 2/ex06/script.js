const valorCompraInput = document.getElementById('valorCompra');
const descontoInput = document.getElementById('desconto');
const calcularBtn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

calcularBtn.addEventListener('click', () => {
    if (valorCompraInput.value === '' || descontoInput.value === '') {
        resultado.textContent = 'Preencha todos os campos.';
        return;
    }

    const valorCompra = Number(valorCompraInput.value);
    const desconto = Number(descontoInput.value);

    if (valorCompra <= 0) {
        resultado.textContent = 'Digite um valor de compra válido.';
        return;
    }

    if (desconto < 0 || desconto > 50) {
        resultado.textContent = 'O desconto deve estar entre 0% e 50%.';
        return;
    }

    let descontoFinal = desconto;

    if (valorCompra > 500) {
        descontoFinal += 10;
    }

    if (descontoFinal > 50) {
        descontoFinal = 50;
    }

    const valorDescontado = valorCompra * (descontoFinal / 100);
    const valorFinal = valorCompra - valorDescontado;

    resultado.innerHTML = `
        <p>Valor da compra: R$ ${valorCompra.toFixed(2)}</p>
        <p>Desconto aplicado: ${descontoFinal}%</p>
        <p>Valor descontado: R$ ${valorDescontado.toFixed(2)}</p>
        <p><strong>Valor final: R$ ${valorFinal.toFixed(2)}</strong></p>
    `;
});