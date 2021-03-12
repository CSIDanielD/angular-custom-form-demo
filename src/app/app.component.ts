import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  formGroup = new FormGroup({});

  // Define the list of food options to populate the CustomFormSelectComponent
  foodOptions = [
    { id: "🍎", name: "🍎" },
    { id: "🥑", name: "🥑" },
    { id: "🍕", name: "🍕" },
    { id: "🍣", name: "🍣" },
    { id: "🍩", name: "🍩" }
  ];

  defaultFormValues = {
    userId: { value: "25", disabled: true },
    fullname: "Test Guy",
    email: "",
    phone: "",
    food: "🍩",
    over21: false
  };

  resetForm() {
    // Reset all the values to the saved defaults, and reset
    // the status of all fields to 'pristine'
    this.formGroup.reset(this.defaultFormValues);
  }

  saveForm() {
    // Display a popup alert with our form
    alert(JSON.stringify(this.formGroup.value));

    // In a real application, you can call a service here to send the data to the backend.
  }

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      userId: [this.defaultFormValues.userId],
      fullname: [this.defaultFormValues.fullname, [Validators.required]],
      email: [
        this.defaultFormValues.email,
        [Validators.required, Validators.email]
      ],
      phone: [
        this.defaultFormValues.phone,
        [
          // RegEx pattern for phone number I looked up
          Validators.pattern(
            new RegExp("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4}$")
          )
        ]
      ],
      food: [
        this.defaultFormValues.food,
        [Validators.pattern(new RegExp("🍎|🥑|🍕|🍣|🍩"))]
      ],
      over21: [this.defaultFormValues.over21]
    });
  }
}
