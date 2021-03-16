import { Injectable } from "@angular/core";
import FormValidationContextConfig from "../types/FormValidationContextConfig";

@Injectable()
export class FormValidationContext {
  public validationContext: FormValidationContextConfig = {};
  constructor() {}
}

export default FormValidationContext;
