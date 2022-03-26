import { Component, OnInit } from '@angular/core';

import { ICourse } from '../interfaces/course.interface';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public courses: ICourse[] = [];

  public displayedColumns: string[] = ['name', 'category'];

  constructor(
    private courseService: CourseService,
  ) { }

  ngOnInit(): void {
    this.courses = this.courseService.list();
  }

}
