import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/entities/student';
import { StudentService} from 'src/app/_services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = new Student();

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    
  }

  saveStudent(){
    this.studentService.addStudent(this.student).subscribe( data =>{
      console.log(data);
      this.goToStudentList();
    });
  }

  goToStudentList(){
    this.router.navigate(['/listStudent']); //router provides a navigate method and through navigate method we can pass a path we are going to navigate
  }

  onSubmit()
  {
    console.log(this.student);
    this.saveStudent();
  }



}
