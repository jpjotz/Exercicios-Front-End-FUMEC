import { Component } from '@angular/core';
import { ProdutoCard } from './produto-card/produto-card';

interface Produto {
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
}

@Component({
  selector: 'app-root',
  imports: [ProdutoCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  produtos: Produto[] = [
    {
      nome: 'Notebook',
      preco: 3500,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX2v8Gy-wt463K7L36rfppEEQ2Sks_iO_ZogJlPmZ3A&s=10',
      descricao: 'Notebook para estudos e trabalho.'
    },
    {
      nome: 'Celular',
      preco: 2000,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQszdiktYhFpd1yVit1766-rBOBSr3K_9HWpJueOACIyQ&s',
      descricao: 'Celular com ótimo desempenho.'
    },
    {
      nome: 'Teclado',
      preco: 150,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPL1-wEjrXpOnO2ea5p7VULh7AyfEmuj8VfGb1kEtL3A&s=10',
      descricao: 'Teclado confortável para digitação.'
    },
    {
      nome: 'Mouse',
      preco: 80,
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1EU4NDRj_GRQ6Fzn5PRsCxSeHl0nHg39zufEKot2uKA&s=10',
      descricao: 'Mouse preciso para uso diário.'
    }
  ];

  adicionarAoCarrinho(produto: Produto): void {
    console.log('Produto adicionado:', produto);
  }
}
