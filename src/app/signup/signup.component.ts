import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    emailAddress: new FormControl('', [Validators.pattern('[a-zA-Z]*')]),
    password: new FormControl('', [Validators.required]),
    termsConditions: new FormControl('', [Validators.required])
  })

  register(){
    console.log(this.registerForm.value)
  }
}
