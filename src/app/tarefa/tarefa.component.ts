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

  adicionar(nomeTarefa:string){
    if(nomeTarefa.trim().length == 0){ return; }
    const tarefaEncontrada = this.listaTarefas.find(item => item.nome.toLowerCase() == nomeTarefa.toLowerCase())
    
    !tarefaEncontrada ? this.listaTarefas.push({id: this.listaTarefas.length, nome:nomeTarefa, concluida: false}) : alert(`Você já cadastrou a tarefa ${nomeTarefa}`)    
  }

  deletar(id:number){
    this.listaTarefas = this.listaTarefas.filter(tarefa => tarefa.id !== id)
  }
}
