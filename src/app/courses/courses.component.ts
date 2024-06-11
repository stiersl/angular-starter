import { Component } from '@angular/core';
//added support for 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
//when nameing classes Use pascal case and end with Component
export class CoursesComponent {
  // Create a title to display on the page
  title = "List of courses";
  // Create a string array of course names
  courses = ["course1","course2","course3"];

}
