import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Jobs } from './JobServices';


export interface JobListForFilter{
  id: number,
  stack : string[]
}


@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  constructor() { }
  private filterList = new BehaviorSubject<string[]>([])
  filterListObservable = this.filterList.asObservable()

  private listaTrabajos = new BehaviorSubject<any[]>(Jobs)
  listaTrabajosSinFiltrarObservable =this.listaTrabajos.asObservable()

  get filterListArray(){
    return this.filterList
  }

  get listaTrabajosArray() {
    return this.listaTrabajos.value
  }

  limpiarFiltro():void{
    this.filterList.next([])
    this.actualizarLista(this.filterList.value)
  }

  añadirFiltro(stack : string) : void {
    const listaActual = this.filterList.value;
    const nuevaLista = [...listaActual,stack]
    this.filterList.next(nuevaLista)
    this.actualizarLista(this.filterList.value)
  }
  eliminarFiltro(stack:string) : void {
    const listaActual = this.filterList.value;
    const indice = listaActual.indexOf(stack);
    if (indice !== -1) {
      listaActual.splice(indice,1)
      this.filterList.next([...listaActual]);
      this.actualizarLista(this.filterList.value)
    }
  }

  actualizarLista(listaFiltro: string[]) {
    const listaTrabajosModificados = Jobs.map((trabajo) => ({
      id: trabajo.id,
      stack: [trabajo.level, trabajo.role, ...trabajo.languages, ...trabajo.tools]
    }));


    const listaFiltrada = listaTrabajosModificados.filter((job: JobListForFilter) => {
      return listaFiltro.every((stack) => job.stack.includes(stack));
    });

    const mapeadoNuevosTrabajos = listaFiltrada.map((filtroTrabajo : any)=>{
      return Jobs.filter((job)=>job.id === filtroTrabajo.id)
    }).flat()

    if(listaFiltro.length>0){
      this.listaTrabajos.next(mapeadoNuevosTrabajos)
    }else{
      this.listaTrabajos.next(Jobs)
    }
  }
}
