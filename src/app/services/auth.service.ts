import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



   user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
  this.user = firebaseAuth.authState;
}

signup(email: string, password: string) {
   this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
     .then(value => {
       console.log('Success!', value);
       return true;
     })
     .catch(err => {
       console.log('Something went wrong:',err.message);
       return false;
     });
 }

 login(email: string, password: string) {
   this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
     .then(value => {
       console.log('Nice, it worked!');
     })
     .catch(err => {
       console.log('Something went wrong:',err.message);
     });
 }




}
