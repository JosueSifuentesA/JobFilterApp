import { Component } from '@angular/core';
import { Jobs } from '../Services/JobServices'
import { JobCardComponent } from '../job-card/job-card.component';
import { JobFilterComponent } from '../job-filter/job-filter.component';

import { FilterServiceService } from '../Services/filter-service.service';

@Component({
  selector: 'app-job-handler',
  standalone: true,
  imports: [JobCardComponent,JobFilterComponent],
  templateUrl: './job-handler.component.html',
  styleUrl: './job-handler.component.css'
})
export class JobHandlerComponent {
  JobsList : any[] = this.filterService.listaTrabajosArray

  constructor(private filterService : FilterServiceService){}

  ngOnInit(){
    this.filterService.listaTrabajosSinFiltrarObservable.subscribe((stack) => {
      this.JobsList = stack;
    });
  }
}


