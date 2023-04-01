import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../_services/notification.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(
    private userAuthService: UserAuthService, 
    private router: Router, 
    public userService: UserService,
    private notify: NotificationService) {}

  //used to check whether user logged in or not
  public isLoggedIn()
  {
    return this.userAuthService.isLoggedIn();   //returns true or false
  }

  //clearing the localStorage means role and token are not stored anymore so currently logged in user is no more valid, so it can be considered as loggedOUT
  public logout()
  {
    this.userAuthService.clear();
    this.router.navigate(['/home']);   //after logging out, it will redirect to home page
    this.notify.success("logged out");
  }

}
