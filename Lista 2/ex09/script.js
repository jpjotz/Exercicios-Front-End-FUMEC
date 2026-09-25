const contatos = [];

const formContato = document.getElementById('formContato');
const nomeInput = document.getElementById('nome');
const telefoneInput = document.getElementById('telefone');
const emailInput = document.getElementById('email');
const pesquisaInput = document.getElementById('pesquisa');
const contatosDiv = document.getElementById('contatos');
const mensagem = document.getElementById('mensagem');

function adicionarContato(nome, telefone, email) {
    contatos.push({
        nome: nome,
        telefone: telefone,
        email: email
    });
}

function listarContatos(lista) {
    contatosDiv.innerHTML = '';

    if (lista.length === 0) {
        contatosDiv.innerHTML = '<p>Nenhum contato encontrado.</p>';
        return;
    }

    lista.forEach(contato => {
        contatosDiv.innerHTML += `
            <div class="contato">
                <h3>${contato.nome}</h3>
                <p>Telefone: ${contato.telefone}</p>
                <p>E-mail: ${contato.email}</p>
            </div>
        `;
    });
}

formContato.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();
    const email = emailInput.value.trim();

    if (nome === '' || telefone === '' || email === '') {
        mensagem.textContent = 'Preencha todos os campos.';
        return;
    }

    adicionarContato(nome, telefone, email);

    mensagem.textContent = 'Contato adicionado com sucesso.';

    formContato.reset();

    listarContatos(contatos);
});

pesquisaInput.addEventListener('input', () => {
    const pesquisa = pesquisaInput.value.toLowerCase().trim();

    const contatosFiltrados = contatos.filter(contato =>
        contato.nome.toLowerCase().includes(pesquisa)
    );

    listarContatos(contatosFiltrados);
});

listarContatos(contatos);