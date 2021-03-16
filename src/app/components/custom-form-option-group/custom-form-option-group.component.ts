import { Component, Input, Optional, Self } from "@angular/core";
import { NgControl } from "@angular/forms";
import FormValidationContext from "../../classes/FormValidationContext";
import { BaseFormFieldDirective } from "../../directives/base-form-field.directive";

@Component({
  selector: "app-custom-form-option-group",
  templateUrl: "./custom-form-option-group.component.html",
  styleUrls: ["./custom-form-option-group.component.css"]
})
export class CustomFormOptionGroupComponent extends BaseFormFieldDirective {
  @Input() id: string | number = "";
  @Input() inputType: "checkbox" | "radio" = "checkbox";
  @Input() options: Array<{}> = [];

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
}
