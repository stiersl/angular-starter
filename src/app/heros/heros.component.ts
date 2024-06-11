import { Component } from '@angular/core';
import { HerosService } from '../shared/Services/heros.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {
  // Create a title to display on the page
  title = "Heros";
  heros: { id: number; name: string; }[];
  // instantiate the HerosService object - this de-couples our heros component, get the heros from the service 
  constructor(service: HerosService) {
    //get the courses from the service
    this.heros = service.getHeros();
  }
}
