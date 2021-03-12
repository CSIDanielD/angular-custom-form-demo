import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  formGroup = new FormGroup({});

  foodOptions = [
    { id: "🍎", name: "🍎" },
    { id: "🥑", name: "🥑" },
    { id: "🍕", name: "🍕" },
    { id: "🍣", name: "🍣" }
  ];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      userId: [{ value: "25", disabled: true }],
      fullname: ["Test Guy", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: [
        "",
        [
          // RegEx pattern for phone number I looked up
          Validators.pattern(
            new RegExp("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4}$")
          )
        ]
      ],
      food: [""]
    });
  }
}
