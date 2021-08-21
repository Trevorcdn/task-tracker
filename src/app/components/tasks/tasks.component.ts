import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task'; //interfaced

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = []; //tasks is an array of interfaced that is empty

  //To use a service we have to inject the service into the constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //since we are dealing with an Observable, we need to subscribe
    //subcribe() is a way of interacting with the recieved data kinda like an if..then
    this.taskService.getTasks().subscribe((tasks) => (this.tasks=tasks)); //in this case, after getting the data we set this.tasks to the data we recieved
  }
  
  deleteTask(task: Task){
    //To get rid of it from ui we filter it out by only displaying ids that are not (!==) equal to the task.id we are deleting
    this.taskService.deleteTask(task).subscribe(() => (this.tasks=this.tasks.filter(t=>t.id !== task.id)));
    //.subscribe can be think of as .then()
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    //push the new created task onto the tasks array of interfaces
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)));
  }
}
