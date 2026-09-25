import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  nome: string = 'João Pedro';
  curso: string = 'Ciência da Computação';
  email: string = 'joaop.ribeiroo01@gmail.com';
  descricao: string = 'Estudante de Ciência da Computação interessado em desenvolvimento web.';

  habilidades: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];
}
