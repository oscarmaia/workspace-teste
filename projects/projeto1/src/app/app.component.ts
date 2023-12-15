import { SaveButtonComponent, TextInputComponent } from '@elogica/components';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SaveButtonComponent,
    TextInputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'projetao1';
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}
  print() {
    console.log(this.form);
  }
}
