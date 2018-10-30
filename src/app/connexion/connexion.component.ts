import { Component, OnInit } from '@angular/core';
import {  FormGroup , Validators, FormBuilder, FormControl } from '@angular/forms';
// import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connecForm: FormGroup;



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.connecForm = this.fb.group({
      'email': new FormControl ('', Validators.compose(
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
      )) ,
      'password': new FormControl ('', Validators.compose(
        [Validators.required]
      )) ,
    });
  }

  

  onSubmit() {
console.warn(this.connecForm.value);
}


}
