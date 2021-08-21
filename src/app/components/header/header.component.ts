import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker'; //var title is a string assigned to 'task-tracker'. i.e string title = 'task-tracker'
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) { //since we inject Router here we can use it's properties in the file
    //subscripting to the uiService onToggle
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}
