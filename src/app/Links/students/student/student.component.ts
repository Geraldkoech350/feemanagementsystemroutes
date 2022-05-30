import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Student } from 'src/app/Interface/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  reg!: string;
  student?: Student;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    //displaying a single student
    // this.id = this.route.snapshot.params['id']
    // this.student= this.studentService.getStudent(this.id)

    this.route.params.subscribe((params: Params) => {
      this.reg = params['reg'];
      this.student = this.studentService.getStudent(this.reg);
    })
  }

  edit(){
    // when clicked it loads the edit product
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
