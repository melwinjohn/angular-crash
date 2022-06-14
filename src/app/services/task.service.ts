import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable, of } from 'rxjs';  
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {

  header: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl : string = 'http://localhost:5000/tasks';
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {

    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder (task:Task): Observable<Task> {
    const url1 = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url1, task,{headers: httpOptions.header});

  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task,{headers: httpOptions.header});
  }
}
