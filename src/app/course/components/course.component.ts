import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ICourse } from '../interfaces/course.interface';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  // public courses: Observable<ICourse[]>;

  public displayedColumns: string[] = ['name', 'category'];

  constructor(
    private courseService: CourseService,
  ) {
    // this.courses = this.courseService.list();
  }

  ngOnInit(): void {
    this.startComponent();
  }

  public async startComponent() {
    this.courseService.list().subscribe(
      data => console.log('data: ', data)
    );
  }

}
