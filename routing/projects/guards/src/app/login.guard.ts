import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    const loggedIn = Math.random() < .5;
    if ( !loggedIn) {
      alert('Tem que fazer log in');
      this.router.navigate(['/login']);
    }
    return loggedIn;
  }
}
