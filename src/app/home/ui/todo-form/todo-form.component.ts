import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateTodo, Todo } from '../../../shared/models/todo';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="todoForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="title" placeholder="title..." />
      <input
        type="text"
        formControlName="description"
        placeholder="description..."
      />
      <button [disabled]="!todoForm.valid" type="submit">Add todo</button>
    </form>
  `,
  styles: ``,
})
export class TodoFormComponent {
  private fb = inject(FormBuilder);

  todoForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: '',
  });

  todoSubmitted = output<CreateTodo>();

  onSubmit() {
    this.todoSubmitted.emit(this.todoForm.getRawValue());
    this.todoForm.reset();
  }
}
