import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/models/user';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
 authenticated = false;


  constructor(private http: HttpClient,private router: Router) {
      
  }

  authenticate(credentials, callback) {
        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get(`${environment.apiUrl}/user`, {headers: headers}).subscribe(user => {
            if (user['email']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            localStorage.setItem('user', JSON.stringify(user));
            return callback && callback();
        });

    }
    logout() {
      this.http.post<any>(`${environment.apiUrl}/logout`, {}).subscribe(() => {
         
      });
      localStorage.removeItem('user');
       
      this.authenticated = false;
      this.router.navigateByUrl('/login');
    }
    hasRole(role){
      return true;
    }

   getUser(){
     return JSON.parse(localStorage.getItem('user'));
   } 
}