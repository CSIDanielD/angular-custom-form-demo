import { FormControl } from "@angular/forms";

export interface ValidationMessagesConfig {
  [validationKey: string]: (
    error: any,
    fieldName: string,  // How do I get this here?
    control: FormControl
  ) => string;
}

export default ValidationMessagesConfig;
