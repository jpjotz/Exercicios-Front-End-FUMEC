const filmes = [
    'Interestelar',
    'O Senhor dos Anéis',
    'Matrix',
    'Vingadores: Ultimato',
    'Homem-Aranha: Sem Volta para Casa'
];

const filmeInput = document.getElementById('filmeInput');
const pesquisarBtn = document.getElementById('pesquisar');
const resultado = document.getElementById('resultado');
const filmesUl = document.getElementById('filmes');

function listarFilmes() {
    filmesUl.innerHTML = '';

    filmes.forEach(filme => {
        filmesUl.innerHTML += `<li>${filme}</li>`;
    });
}

pesquisarBtn.addEventListener('click', () => {
    const nome = filmeInput.value.trim();

    if (nome === '') {
        resultado.textContent = 'Digite o nome de um filme.';
        return;
    }

    const filmesEncontrados = filmes.filter(filme =>
        filme.toLowerCase().includes(nome.toLowerCase())
    );

    if (filmesEncontrados.length === 0) {
        resultado.textContent = 'Filme não cadastrado.';
        return;
    }

    resultado.textContent = `Filme encontrado: ${filmesEncontrados.join(', ')}`;
});

listarFilmes();