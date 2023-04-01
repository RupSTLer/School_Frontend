import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { count, delay, filter } from 'rxjs';
import { StudentService } from '../_services/student.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message: string;
  countStu: number;
  countTea: number;
  constructor(
    private userService: UserService, 
    private observer: BreakpointObserver,
    private studentService: StudentService) {}

  ngOnInit(): void {
    this.forAdmin();
    this.countStudent();
  }

  forAdmin()
  {
    this.userService.forAdmin().subscribe(
      (response) => {
        console.log(response);
        this.message = response;
      }
    )
  }

  countStudent()
  {
    this.studentService.countStudent().subscribe(
      (res2) => {
        var count = Number(res2);
        console.log(count);
        this.countStu = count;
      }
    )
  }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res: any) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
}


