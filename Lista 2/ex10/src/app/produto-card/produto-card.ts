import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Produto {
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
}

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.css'
})
export class ProdutoCard {

  @Input() produto!: Produto;

  @Output() adicionar = new EventEmitter<Produto>();

  adicionarCarrinho(): void {
    this.adicionar.emit(this.produto);
  }
}
