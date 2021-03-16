import { Directive, Input } from "@angular/core";
import FormValidationContext from "../classes/FormValidationContext";
import FormValidationContextConfig from "../types/FormValidationContextConfig";

@Directive({
  // Allow <form> tags to provide the validationContext to its children,
  // or allow sticking [validationContextProvider] attribute on any element.
  selector: "form , [validationContextProvider]",
  providers: [FormValidationContext]
})
export class FormValidationContextProvider {
  @Input() validationContext: FormValidationContextConfig = {};

  constructor(private _validationContext: FormValidationContext) {}

  ngOnInit() {
    // Configure the FormValidationContext instance created by this Provider
    // with the given FormValidationContextConfig.
    this._validationContext.validationContext = this.validationContext;
    console.log(
      "Form validation messages:",
      Object.keys(this._validationContext.validationContext.validationMessages)
    );
  }
}

export default FormValidationContextProvider;
