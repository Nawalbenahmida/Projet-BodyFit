import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup, AbstractControl,  FormControl } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscForm: FormGroup;
  email: string;
  firstName: string;
 password: string;
 errorMessage: string = 'ooopps';




  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.inscForm = this.fb.group({
      'firstName': new FormControl ('', Validators.compose(
          [Validators.required]
        )) ,
      'lastName': new FormControl ('', Validators.compose(
          [Validators.required]
        )) ,
      'email': new FormControl ('', Validators.compose(
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
      )),
      'password': new FormControl ('', Validators.compose(
          [Validators.required, Validators.minLength(6),
         Validators.maxLength(25)]
        )) ,

      });

  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }


onSubmit() {
console.warn(this.inscForm.value);
}



}
