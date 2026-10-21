import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, Input, OnDestroy, Optional, Self } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';

interface HeightValue {
  feet: number | null;
  inches: number | null;
}

@Component({
  selector: 'app-height-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './height-input.html',
  styleUrl: './height-input.css',
  providers: [{ provide: MatFormFieldControl, useExisting: HeightInputComponent }],
  host: {
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  },
})
export class HeightInputComponent
  implements MatFormFieldControl<HeightValue>, ControlValueAccessor, OnDestroy
{
  static nextId = 0;
  id = `height-input-${HeightInputComponent.nextId++}`;

  parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  controlType = 'height-input';
  describedBy = '';

  onChange = (_: any) => {};
  onTouched = () => {};

  @Input()
  get value(): HeightValue | null {
    if (this.parts.valid) {
      const { feet, inches } = this.parts.value;
      return { feet: feet ?? 0, inches: inches ?? 0 };
    }
    return null;
  }
  set value(val: HeightValue | null) {
    const { feet, inches } = val || { feet: null, inches: null };
    this.parts.setValue({ feet, inches }, { emitEvent: false });
    this.stateChanges.next();
  }

  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;

  get empty() {
    const { feet, inches } = this.parts.value;
    return !feet && !inches;
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  get errorState(): boolean {
    return this.parts.invalid && this.touched;
  }

  constructor(
    private fb: FormBuilder,
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Self() public ngControl: NgControl,
  ) {
    this.parts = this.fb.group({
      feet: [null],
      inches: [null],
    });

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    _focusMonitor.monitor(_elementRef, true).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
      if (!this.focused) {
        this.touched = true;
        this.onTouched();
      }
    });
  }

  writeValue(val: HeightValue | null): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    isDisabled ? this.parts.disable() : this.parts.enable();
    this.stateChanges.next();
  }

  _handleInput(): void {
    this.onChange(this.value);
  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this._elementRef.nativeElement.querySelector('input')?.focus();
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
}
