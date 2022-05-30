import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Interface/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-balance',
  templateUrl: './withbalances.component.html',
  styleUrls: ['./withbalances.component.css']
})
export class BalanceComponent implements OnInit {

  students: Student[]=[]

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudentWithBalance()
    console.log(this.students);
    
  }

}
