import { Injectable, computed, effect, signal } from '@angular/core';
import { CreateTodo, Todo } from '../models/todo';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);
  todos = this.#todos.asReadonly();

  todosLength = computed(() => this.#todos().length);

  constructor() {
    effect(() => {
      console.log('Todos: ', this.#todos());
    });
  }

  addTodo(todo: CreateTodo) {
    this.#todos.update((todos) => [
      ...todos,
      {
        ...todo,
        id: Date.now().toString(),
      },
    ]);
    console.log('Todo added!', todo);
  }

  deleteTodo(todo: Todo) {
    this.#todos.update((todos) => todos.filter((t) => t.id !== todo.id));
  }
}
