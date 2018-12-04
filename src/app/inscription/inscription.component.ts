import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup, AbstractControl,  FormControl } from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { AuthService } from '../services/auth.service';
import {Message} from 'primeng/components/common/api';
import { User } from '../interface/user';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscForm: FormGroup;
  msgs: Message[] = [];


  user: User =   {  name_user: '', firstName_user: '', mail_user:'',   password_user:''  };





  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.inscForm = this.fb.group({
      'name_user': new FormControl ('', Validators.compose(
          [Validators.required]
        )) ,
      'firstName_user': new FormControl ('', Validators.compose(
          [Validators.required]
        )) ,
      'mail_user': new FormControl ('', Validators.compose(
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
      )),
      'password_user': new FormControl ('', Validators.compose(
          [Validators.required, Validators.minLength(6),
         Validators.maxLength(25)]
        )) ,

      });

  }


    addUser(user: User): void {
      this.authService.addUser(user).subscribe(user => {
          alert("User created successfully.");
          console.log(user);
           this.router.navigate(['/categorie'])
        });
    }

  showError() {
           this.msgs = [];
           this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
       }


onSubmit() {
console.warn(this.inscForm.value);
}



}
