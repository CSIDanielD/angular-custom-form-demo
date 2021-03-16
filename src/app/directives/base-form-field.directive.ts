import { Directive } from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl } from "@angular/forms";
import FormValidationContext from "../classes/FormValidationContext";
import FormControlAccessor from "../interfaces/FormControlAccessor";
import ValidationMessagesConfig from "../types/ValidationMessagesConfig";

/**
 * Serves as the base class for all our custom form field components.
 * Helps connect a field's DOM element(s) to its Reactive Form control.
 * Abstracts away the ControlValueAccessor implementation since it won't need
 * to change for most derived classes.
 * @see Based on: https://ritchiejacobs.be/angular-custom-form-component
 */
@Directive({
  selector: "[appBaseFormField]"
})
export class BaseFormFieldDirective
  implements ControlValueAccessor, FormControlAccessor {
  valid
  disabled: boolean = false;
  value: any = "";

  public onChange(value: any) {}
  public onTouched() {}

  constructor(private ngControl?: NgControl, private _validationContext? : FormValidationContext) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  /** The injected NgControl cast to FormControl */
  get control() {
    return this.ngControl ? ((this.ngControl as unknown) as FormControl) : null;
  }

  get validationContext() {
    return this._validationContext?.validationContext;
  }

  /** The current validation error messages in array form. */
  get errorMessages() {
    if (!this.ngControl || !this.ngControl.errors || !this.validationContext)
      return null;

    const validationMessageKeys = Object.keys(
      this.validationContext.validationMessages
    );

    if (!validationMessageKeys || validationMessageKeys.length === 0)
      return null; // Return early if no custom validation messages were given.

    // Create a copy of the validationMessages object, but with lowercase keys.
    // This facilitates matching the ngControl errors with the defined
    // messages.
    const lowercaseKeys = validationMessageKeys.reduce(
      (keys, key) => {
        keys[
          key.toLocaleLowerCase()
        ] = this.validationContext.validationMessages[key];
        return keys;
      },
      {} as ValidationMessagesConfig
    );

    return Object.keys(this.ngControl.errors).reduce(
      (messages, currentErrorKey) => {
        const error = this.ngControl[currentErrorKey];

        if (lowercaseKeys[currentErrorKey.toLocaleLowerCase()]) {
          // Get the actual error string by calling the provided function
          const errorStr = lowercaseKeys[currentErrorKey.toLocaleLowerCase()](
            error,
            this.control
          );

          messages.push(errorStr);
        }

        return messages;
      },
      [] as string[]
    );
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
