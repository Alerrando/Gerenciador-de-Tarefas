import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  listaTarefas:any[] = [
    { id: 0, nome: "Lavar o carro", concluida: false},
    { id: 1, nome: "Ir ao mercado", concluida: true},
    { id: 2, nome: "Lavar roupas", concluida: false}
  ]
}
