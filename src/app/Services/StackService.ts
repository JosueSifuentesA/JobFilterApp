import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class StackService{

  private filterList = new BehaviorSubject<string[]>([])
  filterListObservable = this.filterList.asObservable()


  añadirFiltro(stack : string) : void{
    const listaActual = this.filterList.value;
    const nuevaLista = [...listaActual,stack]
    this.filterList.next(nuevaLista)
  }
}


