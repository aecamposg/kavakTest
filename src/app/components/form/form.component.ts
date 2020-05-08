import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  testForm: FormGroup;
  submitted = false;

  get f() { return this.testForm.controls; }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.testForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
      this.submitted = true;

      // Validate the form
      if (this.testForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.testForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.testForm.reset();
  }
}
