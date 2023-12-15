import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

type Tamanho = 'col-4' | 'col-6' | 'col-8' | 'col-12';

@Component({
  selector: 'el-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div [ngClass]="tamanho">
      <input type="text" class="form-control" [formControl]="control" />
      <span [ngClass]="temErro ? 'text-danger' : ''">{{
        this.control.value
      }}</span>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() tamanho: Tamanho = 'col-4';
  @Input() onErrorMessage: string = '';
  @Input() temErro: boolean = false;
  control = new FormControl();

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this.control.setValue(obj, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }
}
