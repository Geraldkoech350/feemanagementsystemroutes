import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AddStudentComponent } from './Links/add-student/add-student.component';
import { HomeComponent } from './Links/home/home.component';
import { StudentsComponent } from './Links/students/students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './Links/students/student/student.component';
import { EditStudentComponent } from './Links/students/edit-student/edit-student.component';
import { AuthStudentGuard } from './Services/auth-guard.service';
import { AuthStudentService } from './Services/auth-student.service';
import { BalanceComponent } from './Links/students/StudentW/balances/withbalances.component';
import { OBalanceComponent } from './Links/students/StudentW/nobalances/nobalances.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddStudentComponent,
    HomeComponent,
    StudentsComponent,
    StudentComponent,
    EditStudentComponent,
    BalanceComponent,
    OBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    CommonModule
  ],
  providers: [AuthStudentGuard, AuthStudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
