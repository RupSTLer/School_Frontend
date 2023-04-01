import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../_services/notification.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(
    private userservice: UserService, 
    private userAuthService: UserAuthService, 
    private router: Router,
    private notify: NotificationService) { }

  ngOnInit(): void {
  }

  login(loginForm:NgForm)
  {
    // console.log("Form is submitted");
    // console.log(loginForm.value);  //will return value taken from the form on console

    this.userservice.login(loginForm.value).subscribe(
      (response: any) => {
        // console.log(response); //to check the response
        // console.log(response.jwtToken);
        // console.log(response.user.role);
        
        //storing response(role and token) into localStorage
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        if(role === 'Admin')
        {
          this.router.navigate(['/admin']);  //if logged in user is admin, the page will navigate to admin dashboard
          this.notify.success("Admin logged in");
        }
        else{
          this.router.navigate(['/user']);   //if logged in user is user, the page will navigate to user dashboard
          this.notify.success("User logged in");
        }
      },

    );
  }

  registerUser() {
    this.router.navigate(['/register']);
  }

}

//generated token will be erased when user reload the page,so the token should be stored in some permanent space so that the user dont need to login again and again
//we can use cookies, session to store the jwt token but localStorage could be the best amongst

