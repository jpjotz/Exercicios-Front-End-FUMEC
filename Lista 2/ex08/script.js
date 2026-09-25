const produtos = [
    {
        nome: 'Notebook',
        preco: 3500
    },
    {
        nome: 'Mouse',
        preco: 80
    },
    {
        nome: 'Teclado',
        preco: 150
    },
    {
        nome: 'Fone de ouvido',
        preco: 200
    }
];

const carrinho = [];

const produtosDiv = document.getElementById('produtos');
const carrinhoDiv = document.getElementById('carrinho');
const totalH3 = document.getElementById('total');

function listarProdutos() {
    produtosDiv.innerHTML = '';

    produtos.forEach((produto, indice) => {
        produtosDiv.innerHTML += `
            <div class="produto">
                <span>
                    ${produto.nome} - R$ ${produto.preco.toFixed(2)}
                </span>

                <button onclick="adicionarCarrinho(${indice})">
                    Adicionar
                </button>
            </div>
        `;
    });
}

function adicionarCarrinho(indice) {
    carrinho.push(produtos[indice]);

    listarCarrinho();
}

function removerCarrinho(indice) {
    carrinho.splice(indice, 1);

    listarCarrinho();
}

function listarCarrinho() {
    carrinhoDiv.innerHTML = '';

    carrinho.forEach((produto, indice) => {
        carrinhoDiv.innerHTML += `
            <div class="item-carrinho">
                <span>
                    ${produto.nome} - R$ ${produto.preco.toFixed(2)}
                </span>

                <button onclick="removerCarrinho(${indice})">
                    Remover
                </button>
            </div>
        `;
    });

    calcularTotal();
}

function calcularTotal() {
    const total = carrinho.reduce((soma, produto) => {
        return soma + produto.preco;
    }, 0);

    totalH3.textContent = `Total: R$ ${total.toFixed(2)}`;
}

listarProdutos();