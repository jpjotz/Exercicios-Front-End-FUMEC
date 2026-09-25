const temperaturaInput = document.getElementById('temperatura');
const origem = document.getElementById('origem');
const destino = document.getElementById('destino');
const converterBtn = document.getElementById('converter');
const resultado = document.getElementById('resultado');

converterBtn.addEventListener('click', () => {

    if (temperaturaInput.value === '') {
        resultado.textContent = 'Digite uma temperatura.';
        return;
    }

    const temperatura = Number(temperaturaInput.value);

    if (isNaN(temperatura)) {
        resultado.textContent = 'Digite um valor válido.';
        return;
    }

    if (origem.value === destino.value) {
        resultado.textContent = `${temperatura}°${origem.value}`;
        return;
    }

    let convertido;

    if (origem.value === 'C' && destino.value === 'F') {
        convertido = (temperatura * 9 / 5) + 32;
    } else {
        convertido = (temperatura - 32) * 5 / 9;
    }

    resultado.textContent = `${convertido.toFixed(2)}°${destino.value}`;
});