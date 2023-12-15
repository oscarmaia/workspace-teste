import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef, inject } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

type Tamanho = 'col-4' | 'col-6' | 'col-8' | 'col-12';

@Component({
  selector: 'el-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div [ngClass]="tamanho">
      <input type="text" class="form-control" [formControl]="formControl" />
      <span [ngClass]="temErro ? 'text-danger' : ''">{{
        this.formControl.value
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
  value: string = '';
  formControl: FormControl = new FormControl();
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.formControl.setValue(value);
    this.onChange(value);
    this.onTouch();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    console.log('tocou no input');
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }
}
