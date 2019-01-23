import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public title: string;
  @Input() public todoPlaceholder: string;
  // tslint:disable-next-line:no-output-rename
  @Output( 'newTodoAdd' ) private newTodoEmitter: EventEmitter<string>;

  public newTodo;

  addTodo(newInput) {
    this.newTodoEmitter.emit(this.newTodo);
    newInput.value = '';
  }

  constructor() {
    this.newTodoEmitter = new EventEmitter<string>();
   }

  ngOnInit() {
  }

}
