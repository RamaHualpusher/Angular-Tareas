import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  listaTareas:Tarea[] = [];
  nombreTarea:string = '';

  constructor() { }

  ngOnInit(): void {}

  agregarTarea(){
    this.listaTareas.push(new Tarea(this.nombreTarea, false));
    this.nombreTarea = '';
  }
  eliminarTarea(index:number){
    this.listaTareas.splice(index, 1);
  }
  actualizarTarea(index:number){
    this.listaTareas[index].estado = !this.listaTareas[index].estado;
  }
}
