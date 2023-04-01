import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/entities/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {

  // student: Student = new Student();

  id: number
  student: Student
  constructor(private route: ActivatedRoute, private studentService: StudentService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.student = new Student();
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data;
    });
  }

}
