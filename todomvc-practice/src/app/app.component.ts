import { Component } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  todoPlaceholder = 'What needs to be done?';
  todos: Todo [] = [];
  maxId = 0;
  filterCondition = 'All';

  // new added
  addTodo(newTodo) {
    this.todos.push({
      id: ++this.maxId,
      prop: newTodo,
      isCompleted: false,
      isEditing: false
    });
    console.log(this.todos);
    this.todos = this.todos.slice();
  }
  // toggle completed
  toggleCompleted(todo: Todo) {
       todo.isCompleted = !todo.isCompleted;
      // this.todos = [...this.todos];
       this.todos = this.todos.slice();

      // this.todos = this.todos.map( x => {
      //  if (x.id === todo.id) {
      //   x.isCompleted = !x.isCompleted;
      //  }
      //  return x;
      // });
  }
  // remove todo
  removeTodo(todo: Todo, idx) {
     // this.todos = this.todos.filter(x => x.id !== todo.id);
    this.todos.splice(idx, 1);
    this.todos = this.todos.slice();
  }

  // toggleAll
  toggleAll() {
    this.todos.forEach(todo => todo.isCompleted = true);
  }

  // todoCount
  todoCount(): number {
    // return this.todos.filter(todo => !todo.isCompleted).length;
    const unCompletedTodos: Todo[] = [];
    this.todos.forEach(todo => {
      if (!todo.isCompleted) { unCompletedTodos.push(todo); }
    });
    return unCompletedTodos.length;
  }

  // clear completed
  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.isCompleted);
  }

}


export interface Todo {
  id: number;
  prop: string;
  isCompleted: boolean;
  isEditing: boolean;
}
