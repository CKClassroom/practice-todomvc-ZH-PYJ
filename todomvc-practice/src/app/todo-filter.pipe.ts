import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from './app.component';

@Pipe({
  name: 'todoFilter',
  // pure: false
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[], filterCondition: string): any {
    console.log(todos);
    if ( filterCondition === 'All') {
      return todos;
    }

    if ( filterCondition === 'active') {
      return todos.filter( todo => !todo.isCompleted);
    }

    if ( filterCondition === 'completed') {
      return todos.filter( todo => todo.isCompleted);
    }
  }
}
