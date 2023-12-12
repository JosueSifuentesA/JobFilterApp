import { Component, Input } from '@angular/core';

import { FilterServiceService } from '../Services/filter-service.service';

export default interface JobInformation{

  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[]

}

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  constructor(private stackService : FilterServiceService){}
  @Input() jobInformation : JobInformation = {
    id: 0,
    company: '',
    logo: '',
    new: false,
    featured: false,
    position: '',
    role: '',
    level: '',
    postedAt: '',
    contract: '',
    location: '',
    languages: [],
    tools: []
  }
  stack : string[] = []
  ngOnInit(){
    this.stack = [this.jobInformation.role , this.jobInformation.level,...this.jobInformation.languages,...this.jobInformation.tools]
    //console.log(this.stack)
  }

  addStack(event:any):void{
    const stack = event.currentTarget.textContent
    if(this.stackService.filterListArray.value.indexOf(stack) == -1){
      this.stackService.añadirFiltro(stack)
      //console.log(event.currentTarget.textContent)
    }
  }


}
