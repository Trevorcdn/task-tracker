import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string; //!: means that "I know it's not initialized yet or set to null but I will set it later"
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    //EventEmitter in this case allows us to create a custom event
    //So in header.component.html we can call (btnClick) as an event similiar to how we used (click)=...
    this.btnClick.emit();
  }
}
