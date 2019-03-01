import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

import { bloodgroups, countries } from '../constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  bloodGroups: string[] = bloodgroups;
  countries: { Country: string, CountryCode: string, ISOCodes: string }[] = countries;
  registrationForm = this.formbuilder.group({
    name: ['', Validators.required],
    person: this.formbuilder.group({
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      bloodgroup: ['', Validators.required]
    }),
    contact: this.formbuilder.group({
      country: ['', Validators.required],
      phones: this.formbuilder.array([
        this.formbuilder.group({
          phonecountrycode: ['', Validators.required],
          phone: ['', Validators.required]
        })
      ])
    }),
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  get phones() {
    return this.registrationForm.get('contact.phones') as FormArray;
  }

  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  addPhoneNumber() {
    this.phones.push(
      this.formbuilder.group({
        phonecountrycode: ['', Validators.required],
        phone: ['', Validators.required]
      })
    );
  }

  doRegistration() {
    console.log(JSON.stringify(this.registrationForm.value));
  }

}
