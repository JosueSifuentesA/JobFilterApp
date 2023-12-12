import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { JobCardComponent } from './job-card/job-card.component';
import { JobHandlerComponent } from './job-handler/job-handler.component';
import { StackService } from './Services/StackService';
import { FilterServiceService } from './Services/filter-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,JobFilterComponent,JobCardComponent,JobHandlerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JobApp';
}
