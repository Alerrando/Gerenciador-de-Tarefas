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
    if(tarefas){
      this.listaTarefas = JSON.parse(tarefas);
    }
  }

  adicionar(nomeTarefa:string){
    if(nomeTarefa.trim().length == 0){ return; }
    const tarefaEncontrada = this.listaTarefas.find(item => item.nome.toLowerCase() == nomeTarefa.toLowerCase())
    
    if(!tarefaEncontrada){ 
      this.listaTarefas.push({id: this.listaTarefas.length, nome:nomeTarefa, concluida: false})
      this.salvarLista()
    } 
    else
      alert(`Você já cadastrou a tarefa ${nomeTarefa}`)    
  }

  deletar(id:number){
    this.listaTarefas = this.listaTarefas.filter(tarefa => tarefa.id !== id)
    this.salvarLista()
  }

  completar(id:number){
    const tarefaEncontrada = this.listaTarefas.find(item => item.id == id);

    if(TarefaComponent) {
      tarefaEncontrada.concluida = !tarefaEncontrada.concluida;
      this.salvarLista()
    }
    
  }

  private salvarLista(){
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.listaTarefas));
  }
}
