import { Component, OnInit } from '@angular/core';

import { CoursesService } from './../services/courses.service';
import { Course } from './model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.courses = this.coursesService.list();
  }

}
