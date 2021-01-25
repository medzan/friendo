import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/service/authentication.service';
import {User} from '@app/models/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public user:User;
  constructor(private authenticationService: AuthenticationService,location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
  }

  ngOnInit() {
    this.user = this.authenticationService.getUser();

  }
 
  getName(){
      return this.user.firstName + ' ' +this.user.lastName;
  }
  logout(){
    this.authenticationService.logout();
  }

}
