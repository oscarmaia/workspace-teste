import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'el-btn',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="onClick()"
      [type]="btnType"
      class="btn"
      [ngClass]="btnClass"
    >
      {{ text }}
    </button>
  `,
})
export class SaveButtonComponent {
  @Input() btnClass: string = 'btn';
  @Input() btnType: string = 'button';
  @Input() text: string = 'Button Name';
  @Output() 
  onBtnClick = new EventEmitter<any>();

  onClick() {
    this.onBtnClick.emit();
  }
}
