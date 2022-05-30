import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectUnsubscribedError } from 'rxjs';
import { Student } from 'src/app/Interface/student';
import { StudentService } from 'src/app/Services/student.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  profile!: FormGroup
  isinvalid:boolean=false
  student: Student[]=[]
  constructor(private studentService: StudentService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.profile = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'reg': new FormControl(null,Validators.required),
      'balance': new FormControl(0, Validators.required),
      'school': new FormControl(null, Validators.required),
      'course': new FormControl(null, Validators.required),
      'contacts': new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9_.+-]+@thejitu.com+$/)]),
      'phone': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]{10}$")])

      })
      


    })
  }
  public errMsg = '';


  onSubmit(){
    if(!this.profile!.touched && !this.profile!.valid){
      this.errMsg = '* Please enter all details correctly';
      setTimeout(()=>{
        this.errMsg = '';
      }, 5000);
    } else {
      this.studentService.addStudent(this.profile.value)
      this.router.navigate(['/students'], {relativeTo: this.route})
      console.log(this.profile.value);
    }
    
  }
}
