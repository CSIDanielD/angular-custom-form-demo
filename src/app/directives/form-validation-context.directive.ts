import { Directive, Input } from "@angular/core";
import ValidationMessagesConfig from "../types/ValidationMessagesConfig";

@Directive({
  selector: "[appFormValidationContext]",
  providers: [
    {
      // Allow this context to be injected into form field components.
      provide: FormValidationContextDirective
    }
  ]
})
export class FormValidationContextDirective {
  @Input() validationMessages: ValidationMessagesConfig = {};
  constructor() {}
}

export default FormValidationContextDirective;
