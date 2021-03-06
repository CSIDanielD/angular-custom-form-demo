import { Component, Input, Optional, Self } from "@angular/core";
import { NgControl } from "@angular/forms";
import FormValidationContext from "../../classes/FormValidationContext";
import { BaseFormFieldDirective } from "../../directives/base-form-field.directive";

/**
 * A custom form input component.
 */
@Component({
  selector: "app-custom-form-input",
  templateUrl: "./custom-form-input.component.html",
  styleUrls: ["./custom-form-input.component.css"]
})
export class CustomFormInputComponent extends BaseFormFieldDirective {
  @Input() id: string | number = "";
  @Input() label: string = "";
  @Input() name: string = "";
  @Input() placeholder: string = "";
  @Input() inputType: "text" | "email" | "password" | "checkbox" | "radio" =
    "text";
  @Input() inlineOption = false;

  constructor(
    // Retrieve the dependency only from the local injector,
    // not from parent or ancestors.
    @Self()
    // We want to be able to use the component without a form,
    // so we mark the dependency as optional.
    @Optional()
    ngControl: NgControl,
    @Optional()
    validationContext: FormValidationContext
  ) {
    super(ngControl, validationContext);
  }

  /** Gets a option input element's value from the given event. */
  getHTMLCheckedValue(ev: Event) {
    return (ev.target as HTMLInputElement).checked;
  }

  /** Gets a text-based input element's value from the given event. */
  getHTMLTextValue(ev: Event) {
    return (ev.target as HTMLInputElement).value;
  }
}
