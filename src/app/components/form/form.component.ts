import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectService } from 'src/app/services/select.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  testForm: FormGroup;
  submitted = false;
  countries: Country[] = [];
  geners: string[] = ['M', 'F'];

  get f() { return this.testForm.controls; }

  constructor(private formBuilder: FormBuilder,
              private selectService: SelectService) { }

  ngOnInit() {
    this.loadCountries();
    this.testForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        email: ['', [Validators.required, Validators.email]],
        countries: ['', [Validators.required]],
        gener: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  loadCountries() {
    this.selectService.getCountries().subscribe(
      x => {
        if (x.length > 0) {
          x.forEach(c => {
            const country = new Country(c.name, c.numericCode);
            this.countries.push(country);
          });
        } else {
          console.log('Error::Countries');
        }
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