import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  listaTarefas:any[] = [];
  TAREFA_KEY = 'tarefa-key';
  
  ngOnInit(): void{
    const tarefas = localStorage.getItem(this.TAREFA_KEY);
  }

  adicionar(nomeTarefa:string){
    if(nomeTarefa.trim().length == 0){ return; }
    const tarefaEncontrada = this.listaTarefas.find(item => item.nome.toLowerCase() == nomeTarefa.toLowerCase())
    
    !tarefaEncontrada ? this.listaTarefas.push({id: this.listaTarefas.length, nome:nomeTarefa, concluida: false}) : alert(`Você já cadastrou a tarefa ${nomeTarefa}`)    
  }

  deletar(id:number){
    this.listaTarefas = this.listaTarefas.filter(tarefa => tarefa.id !== id)
  }

  completar(id:number){
    const tarefaEncontrada = this.listaTarefas.find(item => item.id == id);

    if(TarefaComponent) {tarefaEncontrada.concluida = !tarefaEncontrada.concluida;}
  }
}
