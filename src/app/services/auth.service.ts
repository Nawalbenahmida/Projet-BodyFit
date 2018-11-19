import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '../../../node_modules/@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth,  private router: Router) {
  this.user = firebaseAuth.authState;
}

signup(email: string, password: string) {
       this.firebaseAuth
         .auth
         .createUserWithEmailAndPassword(email, password)
         .then(value => {
           console.log('Success!', value);
              this.router.navigate(['/categorie'])
         })
         .catch(err => {
           console.log('Something went wrong:',err.message);
         });
     }

     login(email: string, password: string) {
       this.firebaseAuth
         .auth
         .signInWithEmailAndPassword(email, password)
         .then(value => {
           console.log('Nice, it worked!');
           this.router.navigate(['/categorie'])

         })
         .catch(err => {
           console.log('Something went wrong:',err.message);
         });
     }

     logout(){
       this.firebaseAuth.auth.signOut();
       this.router.navigate(['/']);

     }

     get authenticated(): boolean {
  return this.firebaseAuth.authState !== null;
}






}
