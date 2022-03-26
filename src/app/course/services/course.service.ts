import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public list(): ICourse[] {
    return [
      { _id: 1, name: 'javascript', category: 'code' },
      { _id: 2, name: 'python', category: 'code' },
      { _id: 3, name: 'rust', category: 'code' },
      { _id: 4, name: 'c#', category: 'code' },
    ];
  }
}
