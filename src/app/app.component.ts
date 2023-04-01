import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'JWT_Role_Auth_UI';

  constructor(private router: Router) { }

  //implementing auto logout
  ngOnInit(): void {
    // this.bnIdle.startWatching(5).subscribe((isTimedOut: boolean) =>{
    //   if(isTimedOut)
    //   {
    //     console.log("Session Expired");
    //     localStorage.clear();
    //     this.router.navigate(['/login']);
    //     this.bnIdle.stopTimer();
    //   }
    // });
  }
}
