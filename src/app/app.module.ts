import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BaseFormFieldDirective } from "./directives/base-form-field.directive";
import { CustomFormInputComponent } from "./components/custom-form-input/custom-form-input.component";
import { CustomFormSelectComponent } from "./components/custom-form-select/custom-form-select.component";
import FormValidationContextDirective from "./directives/form-validation-context.directive";
import { CustomFormTextareaComponent } from './components/custom-form-textarea/custom-form-textarea.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    BaseFormFieldDirective,
    CustomFormInputComponent,
    CustomFormSelectComponent,
    FormValidationContextDirective,
    CustomFormTextareaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
