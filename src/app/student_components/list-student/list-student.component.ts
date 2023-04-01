import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/entities/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {

    // this.students = [{
    //   "id": 1,
    //   "userName":"rup",
    //   "password":"",
    //   "name":"Ralph Del",
    //   "email":"ralph@g.co"
    // },
    // {
    //   "id": 2,
    //   "userName":"rit",
    //   "password":"",
    //   "name":"Ritam Del",
    //   "email":"rit@g.co"
    // }];

    this.getStudents();
  }
  private getStudents() {
    this.studentService.listAllStudents().subscribe(data => {
      this.students=data;
    });
  }

  // updateEmployee(id: number){
  //   this.router.navigate(['updateEmployee', id]);

  // }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log(data);
      this.getStudents();
    })
  }

  studentDetails(id: number) {
    this.router.navigate(['viewStudent', id]);
  }

}
