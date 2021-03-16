import { Component, Input, Optional, Self } from "@angular/core";
import { NgControl } from "@angular/forms";
import FormValidationContext from "../../classes/FormValidationContext";
import { BaseFormFieldDirective } from "../../directives/base-form-field.directive";

@Component({
  selector: "app-custom-form-textarea",
  templateUrl: "./custom-form-textarea.component.html",
  styleUrls: ["./custom-form-textarea.component.css"]
})
export class CustomFormTextareaComponent extends BaseFormFieldDirective {
  @Input() id: string | number = "";
  @Input() label: string = "";
  @Input() name: string = "";
  @Input() placeholder: string = "";
  @Input() rows?: string | number;
  @Input() cols?: string | number;

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

  /** Gets a text-based input element's value from the given event. */
  getHTMLTextValue(ev: Event) {
    return (ev.target as HTMLTextAreaElement).value;
  }
}
