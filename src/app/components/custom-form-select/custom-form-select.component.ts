import { Component, Input, Optional, Self } from "@angular/core";
import { NgControl } from "@angular/forms";
import { BaseFormFieldDirective } from "../../directives/base-form-field.directive";

@Component({
  selector: "app-custom-form-select",
  templateUrl: "./custom-form-select.component.html",
  styleUrls: ["./custom-form-select.component.css"]
})
export class CustomFormSelectComponent extends BaseFormFieldDirective {
  @Input() id: string | number = "";
  @Input() label: string = "";
  @Input() options: Array<{ id: string; name: string }> = [];

  constructor(
    // Retrieve the dependency only from the local injector,
    // not from parent or ancestors.
    @Self()
    // We want to be able to use the component without a form,
    // so we mark the dependency as optional.
    @Optional()
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  getHTMLSelectValue(event: Event) {
    return (event.target as HTMLSelectElement).value;
  }
}
