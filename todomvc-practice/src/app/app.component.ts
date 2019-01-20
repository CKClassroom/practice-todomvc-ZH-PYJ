import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  todoPlaceholder = 'What needs to be done?';
  todos: Todo [] = [];
  newTodo = '';
  maxId = 0;
  filterCondition = 'All';

  // new added
  addTodo(newInput) {
    this.todos.push({
      id: ++this.maxId,
      prop: this.newTodo,
      isCompleted: false,
      isEditing: false
    });
    newInput.value = '';
    console.log(this.todos);
  }
  // toggle completed
  toggleCompleted(todo: Todo) {
      todo.isCompleted = !todo.isCompleted;
  }
  // remove todo
  removeTodo(todo: Todo, idx: number) {
    // this.todos = this.todos.filter(x => x.id !== todo.id);
    this.todos.splice(idx, 1);
    console.log(this.todos);
  }

  // toggleAll
  toggleAll() {
    this.todos.forEach(todo => todo.isCompleted = !todo.isCompleted);
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
