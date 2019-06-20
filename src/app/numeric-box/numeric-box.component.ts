import { Component, OnInit, forwardRef, Output, EventEmitter, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

export const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumericBoxComponent),
  multi: true
};

@Component({
  selector: 'app-numeric-box',
  templateUrl: './numeric-box.component.html',
  styleUrls: ['./numeric-box.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class NumericBoxComponent implements OnInit, ControlValueAccessor {
  @Input() min;
  @Input() max;
  @Input() reset: boolean;
  isErrored;
  @Output() blur = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  private innerValue: any = '';

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value(): any {
    return this.innerValue;
  };

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  checkRange(evt) {
    if (this.reset && this.value > this.max || this.value < this.min) {
      this.isErrored = true;
      setTimeout(() => {
        this.isErrored = false;
        if (this.value > this.max) {
          this.value = this.max;
        }
        else if (this.value < this.min) {
          this.value = this.min;
        }
        // this.writeValue(this.value);
        // this.onChangeCallback(this.value)
        this.blur.emit(this.value);
      }, 500);
    } else{
      this.blur.emit(this.value);      
    }

  }



}
