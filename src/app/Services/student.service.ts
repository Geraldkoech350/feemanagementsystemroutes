import { Injectable } from '@angular/core';
import { Student } from '../Interface/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    {
      reg: 'SC200/0144/2017',
      contacts:{
        email: 'geraldkipngenohkoech@gmail.com',
        phone: 703160063
      },
      name: 'Gerald Kipngenoh Koech',
      balance: -800,
      school: 'Computing and IT',
      course: 'Computer Science',
    },

    {
      reg: 'SC200/1440/2017',
      contacts:{
        email: 'geraldkipngenohkoech@gmail.com',
        phone: 703160063
      },
      name: 'Litei Michael Cherogony',
      balance: -500,
      school: 'Computing and IT',
      course: 'Computer Science',
    },

    {
      reg: 'SC201/0111/2017',
      contacts:{
        email: 'geraldkipngenohkoech@gmail.com',
        phone: 703160063
      },
      name: 'Sharon Chepkoech',
      balance: 200,
      school: 'Computing and IT',
      course: 'Information Technology',
    },

    {
      reg: 'AB100/0331/2017',
      contacts:{
        email: 'geraldkipngenohkoech@gmail.com',
        phone: 703160063
      },
      name: 'Muia Charles Munyao',
      balance: 300,
      school: 'Applied Sciences',
      course: 'Statistics',
    },
  ];

  constructor() {}

  addStudent(student: Student) {
    this.students.push(student);
  }

  getAllStudents() {
    return this.students;
  }

  getStudent(reg: string) {
    return this.students.find((student) => student.reg === reg);
  }

  deleteStudent(reg: string) {
    const index = this.students.findIndex((student) => student.reg === reg);
    return this.students.splice(index, 1);
  }


  updateStudent(reg:string, newbalance: number){
    const student = this.getStudent(reg)
    if(student){
      student.balance = newbalance
    }
  }

  getStudentWithoutBalance(){

    return this.students.filter(student => student.balance! <= 0);
  }

  getStudentWithBalance(){

    return this.students.filter(student => student.balance! > 0);
  }
  
}