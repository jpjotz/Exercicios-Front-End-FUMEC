const produtos = [
    {
        nome: 'Notebook',
        preco: 3500,
        categoria: 'Eletrônicos',
        estoque: 5
    },
    {
        nome: 'Celular',
        preco: 2000,
        categoria: 'Eletrônicos',
        estoque: 0
    },
    {
        nome: 'Camiseta',
        preco: 80,
        categoria: 'Roupas',
        estoque: 10
    },
    {
        nome: 'Calça',
        preco: 150,
        categoria: 'Roupas',
        estoque: 0
    },
    {
        nome: 'Arroz',
        preco: 25,
        categoria: 'Alimentos',
        estoque: 20
    }
];

const produtosDiv = document.getElementById('produtos');
const semEstoqueDiv = document.getElementById('semEstoque');

const categoriaSelect = document.getElementById('categoria');
const filtrarBtn = document.getElementById('filtrar');
const mostrarTodosBtn = document.getElementById('mostrarTodos');


function listarProdutos(lista) {
    produtosDiv.textContent = '';

    for (const produto of lista) {
        produtosDiv.innerHTML += `
            <div class="produto">
                <h3>${produto.nome}</h3>
                <p>Preço: R$ ${produto.preco}</p>
                <p>Categoria: ${produto.categoria}</p>
                <p>Estoque: ${produto.estoque}</p>
            </div>
        `;
    }
}


function filtrarCategoria() {
    const categoria = categoriaSelect.value;

    const produtosFiltrados = produtos.filter(
        produto => produto.categoria === categoria
    );

    listarProdutos(produtosFiltrados);
}


function mostrarTodos() {
    listarProdutos(produtos);
}


function listarSemEstoque() {
    semEstoqueDiv.textContent = '';

    const produtosSemEstoque = produtos.filter(
        produto => produto.estoque === 0
    );

    for (const produto of produtosSemEstoque) {
        semEstoqueDiv.innerHTML += `
            <p class="semEstoque">${produto.nome}</p>
        `;
    }
}


filtrarBtn.addEventListener('click', () => {
    filtrarCategoria();
});

mostrarTodosBtn.addEventListener('click', () => {
    mostrarTodos();
});


listarProdutos(produtos);
listarSemEstoque();
