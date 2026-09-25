import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Tarefa {
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  novaTarefa: string = '';

  tarefas: Tarefa[] = [];

  adicionarTarefa(): void {
    if (this.novaTarefa.trim() === '') {
      return;
    }

    this.tarefas.push({
      descricao: this.novaTarefa,
      concluida: false
    });

    this.novaTarefa = '';
  }

  concluirTarefa(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  removerTarefa(indice: number): void {
    this.tarefas.splice(indice, 1);
  }
}
