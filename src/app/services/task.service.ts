import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {Task} from '../Task'; //interfaced

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'; //url of your api you want to access
  //You have to inject the HttpClient into the constructor as a dependencies
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> { //function return a Task[] array that are Observables
    //get<Task[]> the Task[] is used to get rid of an error regarding 
    //'Observable<Object>' is not assignable to type 'Observable<Task[]>'
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions); //put requests update a resouce
  }

  addTask(task: Task): Observable<Task>{
    //using post request to add a new resouce. We passed in httpOptions because it has a header and we are submitting data
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}

/**/