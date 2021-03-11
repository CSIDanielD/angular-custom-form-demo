import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  formGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      fullname: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]]
    });
  }
}
