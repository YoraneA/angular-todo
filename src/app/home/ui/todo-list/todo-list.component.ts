import { Component, inject, input } from '@angular/core';
import { Todo } from '../../../shared/models/todo';
import { RouterLink } from '@angular/router';
import { TodoService } from '../../../shared/data-access/todo.service';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  imports: [RouterLink],
  template: `
    <ul>
      @for (todo of todos(); track $index){
      <li>
        <a routerLink="/detail/{{ todo.id }}">{{ todo.title }}</a>
        <button (click)="todoService.deleteTodo(todo)">Supprimer</button>
      </li>
      } @empty {
      <li>Nothing to do!</li>
      }
    </ul>
  `,
})
export class TodoListComponent {
  todoService = inject(TodoService);
  todos = input.required<Todo[]>();
}
