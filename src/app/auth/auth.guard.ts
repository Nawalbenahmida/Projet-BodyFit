import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, private router: Router, private afAuth: AngularFireAuth){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.afAuth.authState
          .take(1)
          .map(user => !!user)
          .do(loggedIn => {
            if (!loggedIn) {
              console.log("access denied")
              this.router.navigate(['/']);
              window.alert("Vous avez pas le droit d'acceder sans etre identifié")
            }
        })
  }
}
