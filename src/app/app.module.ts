import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BaseFormFieldDirective } from './directives/base-form-field.directive';
import { CustomFormInputComponent } from './components/custom-form-input/custom-form-input.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, BaseFormFieldDirective, CustomFormInputComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
