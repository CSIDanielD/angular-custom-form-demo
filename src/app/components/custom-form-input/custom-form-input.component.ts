import { Component, Input } from "@angular/core";
import { BaseFormFieldDirective } from "../../directives/base-form-field.directive";
import provideValueAccessor from "../../util/provideValueAccessor";

/**
 * A custom form input component.
 */
@Component({
  selector: "app-custom-form-input",
  templateUrl: "./custom-form-input.component.html",
  styleUrls: ["./custom-form-input.component.css"],
  providers: [provideValueAccessor(() => CustomFormInputComponent)]
})
export class CustomFormInputComponent extends BaseFormFieldDirective {
  @Input() public label: string = "";
  @Input() public placeholder: string = "";
  @Input() public type: "text" | "email" | "password" = "text";

  constructor() {
    super();
  }

  /** Gets an HTML input element's value from the given event. */
  getHTMLEventValue(ev: Event) {
    return (ev.target as HTMLInputElement).value;
  }
}
