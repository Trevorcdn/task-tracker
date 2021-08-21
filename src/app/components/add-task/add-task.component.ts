import { UiService } from './../../services/ui.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) { 
      //subscripting to the uiService onToggle
      this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){//some form of input validation where if user submit without a text then alert will trigger
      alert('Please add a task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    //Since we have an emit we have to go to its parent component(tasks.component)
    this.onAddTask.emit(newTask);
    //clear the form to start anew
    this.text = '';
    this.day = '';
    this.reminder = false;

  }
}
