import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SaveButtonComponent } from '@elogica/components';
// import { CoreComponent } from '../../../core/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SaveButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projeto2';
  print() {
    console.log('Função TOTALMENTE diferente criada pelo -> ', this.title);
  }
}
