import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup, AbstractControl,  FormControl } from '@angular/forms';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscForm: FormGroup;
passwords: FormGroup;
 msgs: Message[] = [];

  constructor(private fb: FormBuilder) { }

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
      passwords: this.fb.group({
                 'password': new FormControl ('', Validators.compose(
                     [Validators.required]
                   )) ,
                 // 'confirmPassword': new FormControl ('', Validators.compose(
                 //     [Validators.required]
                 //   )) ,
              }), //{validator: this.passwordConfirming}),
    });
  }


//   passwordConfirming(c: AbstractControl): { invalid: boolean } {
// if (c.get('password').value !== c.get('confirmPassword').value) {
//  return {invalid: true};
// }
// }



onSubmit() {
console.warn(this.inscForm.value);
}

}
