import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly API = 'https://api.loquiz.com/v3/games/FK5TS3QAB';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public list() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'ApiKey-v1 d64642249a14413ac83fdf40b57192b7be1bfb715a3e74519e279b3ee5eaf426'
      })
    };

    return this.httpClient.get(this.API, httpOptions);
  }
}



// return [
//   { _id: 1, name: 'javascript', category: 'code' },
//   { _id: 2, name: 'python', category: 'code' },
//   { _id: 3, name: 'rust', category: 'code' },
//   { _id: 4, name: 'c#', category: 'code' },
// ];
