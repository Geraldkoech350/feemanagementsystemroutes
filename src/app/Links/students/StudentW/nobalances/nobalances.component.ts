import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Interface/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-obalance',
  templateUrl: './nobalances.component.html',
  styleUrls: ['./nobalances.component.css']
})
export class OBalanceComponent implements OnInit {
  students: Student[]=[]

  constructor(private studentService: StudentService, private router:Router, private route: ActivatedRoute) { 
    this.students = this.studentService.getStudentWithoutBalance()
  }

  ngOnInit(): void {
  }

}
