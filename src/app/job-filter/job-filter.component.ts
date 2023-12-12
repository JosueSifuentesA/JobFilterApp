import { Component } from '@angular/core';
import { FilterServiceService } from '../Services/filter-service.service';

@Component({
  selector: 'app-job-filter',
  standalone: true,
  imports: [],
  templateUrl: './job-filter.component.html',
  styleUrl: './job-filter.component.css'
})
export class JobFilterComponent {
  filterList : string[] = []

  constructor(private filterService : FilterServiceService){}

  ngOnInit(){
    this.filterService.filterListObservable.subscribe((stack) => {
      this.filterList = stack;
    });
  }

  deleteFilterElement(stack : string):void{
    this.filterService.eliminarFiltro(stack)

  }

  clearFilter():void{
    this.filterService.limpiarFiltro()
  }

}
