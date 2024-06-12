import { Component, inject } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form/todo-form.component';
import { Todo } from '../shared/models/todo';
import { TodoService } from '../shared/data-access/todo.service';
import { TodoListComponent } from './ui/todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  template: `
    <h2>Todo</h2>
    <p>Total todos: {{ todoService.todosLength() }}
    <app-todo-form (todoSubmitted)="todoService.addTodo($event)" />
    <app-todo-list [todos]="todoService.todos()" />
  `,
  styles: ``,
})
export default class HomeComponent {
  todoService = inject(TodoService);
}
