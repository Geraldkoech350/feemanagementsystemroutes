import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStudentService } from 'src/app/Services/auth-student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private authService: AuthStudentService) { }

  ngOnInit(): void {
  }

  loadStudent(){
    this.router.navigate(['students'])
  }

  onSignIn(){
    this.authService.login();
  }


  onSignout(){
    this.authService.logout();
  }
}
