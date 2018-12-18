import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '../../../node_modules/@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../interface/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    inscUrl = 'http://localhost:8080/user';
    connexUrl = 'http://localhost:8080/login';


  constructor( private router: Router, public http: HttpClient) {
}

addUser(user: User): Observable<User> {
      return this.http.post<User>(this.inscUrl, user, httpOptions)
     }

login(user: User): Observable<User> {
       return this.http.post<User>(this.connexUrl, user, httpOptions)
     }

isLoggedIn(): boolean {
   return true;
 }




}
