import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url = 'https://localhost:3000/api';

  constructor(private http: Http) {}

  getAllTasks(): Observable<string> {
    return this.http.get(this.url + '/tasks')
    .pipe(map((res: Response) => res.json()));
  }

  createTasks(obj) {
    return this.http.post(this.url + '/newtask', obj)
    .pipe(map((res: Response) => res.json()));
  }

  editTask(obj): Observable<string> {
    return this.http.put(this.url + '/task' + obj._id, obj)
    .pipe(map((res: Response) => res.json()));
  }

  deleteTask(id): Observable<string> {
    return this.http.delete(this.url + '/task' + id)
    .pipe(map((res: Response) => res.json()));
  }
}
