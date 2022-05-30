import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './Links/add-student/add-student.component';
import { HomeComponent } from './Links/home/home.component';
import { EditStudentComponent } from './Links/students/edit-student/edit-student.component';
import { StudentComponent } from './Links/students/student/student.component';
import { StudentsComponent } from './Links/students/students.component';
import { BalanceComponent } from './Links/students/StudentW/balances/withbalances.component';
import { OBalanceComponent } from './Links/students/StudentW/nobalances/nobalances.component';
import { AuthStudentGuard } from './Services/auth-guard.service';

// canActivate:[AuthStudentGuard]
const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'addStudent', canActivate:[AuthStudentGuard], component: AddStudentComponent},
  {path: 'withbalances', canActivate:[AuthStudentGuard], component: BalanceComponent},
  {path: 'nobalances', canActivate:[AuthStudentGuard], component: OBalanceComponent},
  {path: 'students', canActivate:[AuthStudentGuard], component: StudentsComponent, children:[
    {path: ':reg', component: StudentComponent},
    {path: ':reg/edit', component: EditStudentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
