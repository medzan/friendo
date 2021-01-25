import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/service/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  credentials = {username: '', password: ''};

  constructor(private authenticationService: AuthenticationService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.authenticationService.authenticate(this.credentials, () => {
    	let redirectTo = '/';
    	if(this.authenticationService.getUser().role == 'ROLE_USER'){
			redirectTo='/tables'
    	}
        this.router.navigateByUrl(redirectTo);
    });
    return false;
  }

}
