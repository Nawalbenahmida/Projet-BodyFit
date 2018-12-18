import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService, private router: Router){}

  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/categorie']);
      return true;
    }
      this.router.navigate(['/']);
      window.alert("Vous avez pas le droit d'acceder sans etre identifié")
      return false;

  }
  }
