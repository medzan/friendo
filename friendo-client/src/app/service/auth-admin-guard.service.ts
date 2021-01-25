import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import {Role } from '@app/models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuardService implements CanActivate {

 
  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  	console.log("AuthAdminGuardService activate");
    if (this.authService.authenticated && this.authService.hasRole(Role.Admin))
      return true;
  
    this.router.navigate(['login']);
    return false;

  }
}
