import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { bloodgroups, countries } from '../constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  bloodGroups: string[] = bloodgroups;
  countries = countries;
  registrationForm = new FormGroup({
    name: new FormControl(''),
    pi: new FormGroup({
      gender: new FormControl('Male'),
      dob: new FormControl(''),
      bloodgroup: new FormControl('B+')
    }),
    contact: new FormGroup({
      country: new FormControl('India'),
      countrycode: new FormControl('+91'),
      phone: new FormControl('')
    }),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  doRegistration() {
    console.log(JSON.stringify(this.registrationForm.value));
  }

}
