import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { StudentService } from './student.service';

import{ Student} from './student'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  form: FormGroup;
 students:Student[];
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required])
    });
    this.getStudents();
  }

  addStudent(form) { 
    this.studentService.addStudent(form.value.name).subscribe(data=>{
     this.getStudents();
    });
   
  }

  getStudents() {
    this.studentService.getStudents().subscribe(data => {
      
      this.students = data;
    });
  }

}
