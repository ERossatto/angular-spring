import { Component, OnInit } from '@angular/core';
import { ICourse } from './course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public courses: ICourse[] = [
    { _id: 1, name: 'javascript', category: 'code' },
    { _id: 2, name: 'python', category: 'code' },
    { _id: 3, name: 'rust', category: 'code' },
    { _id: 4, name: 'c#', category: 'code' },
  ];

  public displayedColumns: string[] = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
