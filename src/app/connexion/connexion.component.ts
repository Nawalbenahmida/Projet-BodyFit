import { Component, OnInit } from '@angular/core';
import {  FormGroup , Validators, FormBuilder, FormControl } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { Router} from '../../../node_modules/@angular/router';
import {Message} from 'primeng/components/common/api'
import { User } from '../interface/user';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connecForm: FormGroup;
  email: string;
  password: string;
  msgs: Message[] = [];

    user: User =   {  nameUser: '', firstNameUser: '', mailUser:'',   passwordUser:''  };








  constructor(private fb: FormBuilder,  public authService: AuthService, private router: Router){}

  ngOnInit() {
    this.connecForm = this.fb.group({
      'email': new FormControl ('', Validators.compose(
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
      )) ,
      'password': new FormControl ('', Validators.compose(
        [Validators.required, Validators.minLength(6),
         Validators.maxLength(25)]
      )) ,
    });
  }

 login(user: User): void {
    console.log(user);
   this.authService.login(user).subscribe(user => {
       this.router.navigate(['/categorie'])
       alert("User created successfully.");
       console.log(user);


     });

  }


showError() {
         this.msgs = [];
         this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
     }







}
