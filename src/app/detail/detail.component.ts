import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../shared/data-access/todo.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  template: `
    @if (todo(); as todo) {
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.description }}</p>
    } @else {
      <p>Could not find todo...</p>
    }
  `,
  styles: ``,
})
export default class DetailComponent {
  private route = inject(ActivatedRoute);
  private todoService = inject(TodoService);

  private paramMap = toSignal(this.route.paramMap);

  todo = computed(() =>
    this.todoService
      .todos()
      .find((todo) => todo.id === this.paramMap()?.get('id'))
  );
}
