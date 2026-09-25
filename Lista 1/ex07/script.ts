interface Produto {
    nome: string;
    preco: number;
    categoria: string;
    estoque: number;
}

const produtos: Produto[] = [
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

function listarProdutos(lista: Produto[]): void {
    if (produtosDiv === null) {
        return;
    }

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

function filtrarCategoria(categoria: string): Produto[] {
    return produtos.filter(
        produto => produto.categoria === categoria
    );
}

function listarSemEstoque(lista: Produto[]): void {
    if (semEstoqueDiv === null) {
        return;
    }

    semEstoqueDiv.textContent = '';

    const produtosSemEstoque: Produto[] = lista.filter(
        produto => produto.estoque === 0
    );

    for (const produto of produtosSemEstoque) {
        semEstoqueDiv.innerHTML += `
            <p class="semEstoque">${produto.nome}</p>
        `;
    }
}

listarProdutos(produtos);
listarSemEstoque(produtos);

const produtosEletronicos: Produto[] = filtrarCategoria('Eletrônicos');

console.log('Produtos eletrônicos:');
console.log(produtosEletronicos);
export {}