import { Directive, Input, Optional, Self } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

/// This directive is based on this: https://ritchiejacobs.be/angular-custom-form-component
@Directive({
  selector: "[appBaseFormField]"
})
export class BaseFormFieldDirective implements ControlValueAccessor {
  @Input() public disabled: boolean = false;
  public value: any = "";

  public onChange(value: any) {}
  public onTouched() {}

  constructor(
    // Retrieve the dependency only from the local injector,
    // not from parent or ancestors.
    @Self()
    // We want to be able to use the component without a form,
    // so we mark the dependency as optional.
    @Optional()
    private ngControl?: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  /**
   * Write form value to the DOM element (model => view)
   */
  writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Write form disabled state to the DOM element (model => view)
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Update form when DOM element value changes (view => model)
   */
  registerOnChange(changeHandler: (value: any) => any): void {
    // Store the provided function as an internal method.
    this.onChange = changeHandler;
  }

  /**
   * Update form when DOM element is blurred (view => model)
   */
  registerOnTouched(fn: any): void {
    // Store the provided function as an internal method.
    this.onTouched = fn;
  }
}
