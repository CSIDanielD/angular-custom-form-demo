import { Component, Input, Optional, Self } from "@angular/core";
import { NgControl } from "@angular/forms";
import FormValidationContext from "../../classes/FormValidationContext";
import { BaseFormFieldDirective } from "../../directives/base-form-field.directive";
import CustomFormSelectOption from "../../types/components/customFormSelectOption";

@Component({
  selector: "app-custom-form-select",
  templateUrl: "./custom-form-select.component.html",
  styleUrls: ["./custom-form-select.component.css"]
})
export class CustomFormSelectComponent extends BaseFormFieldDirective {
  @Input() id: string | number = "";
  @Input() label: string = "";
  @Input() options: Array<CustomFormSelectOption> = [];

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

  getHTMLSelectValue(event: Event) {
    return (event.target as HTMLSelectElement).value;
  }
}
