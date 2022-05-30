import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from 'src/app/Interface/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  changesSaved: boolean = false;
  isinvalid:boolean = false
  name=''
  email=''
  phone=''
  school=''
  course=''
  balance=0
  reg!:string
  student?:Student

  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
  }


  deleteStudent(){
    this.route.params.subscribe((params:Params)=>{
      this.reg= params['reg']
      this.student=this.studentService.getStudent(this.reg)

      if(this.student){
        return this.studentService.deleteStudent(this.reg)
      } else{
        return;
      }
    })
    
  }
  
  editStudent(){
    //populating the form
    this.route.params.subscribe((params:Params)=>{
      this.reg = params['reg']
      this.studentService.updateStudent(this.reg, this.balance)
      this.router.navigate(['/students'], {relativeTo: this.route})
      
    }) //getting the id

  }


}
