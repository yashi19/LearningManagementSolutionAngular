import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TeacherService } from './teacher.service';

import{ Teacher} from './teacher'
import { SubjectService } from '../subject/subject.service';
import { Subject } from '../subject/subject';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  subjects:Subject[]=[]
subjectId:number;
  form: FormGroup;
  teachers: Teacher[];
  constructor(private teacherService: TeacherService, private subjectService: SubjectService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      subjectId: new FormControl("")
    });
    this.getTeachers();
    this.getSubjects();
  }

  getSubjects(){
    this.subjectService.getSubjects().subscribe(data=>{
      this.subjects=data;
    })
  }

  addTeacher(form) {
    this.teacherService.addTeacher(form, this.subjectId).subscribe(data=>{
   this.getTeachers();
    });
   
  }

  selectSubject(event){
    this.subjectId=event.target.value; 
  }

  getTeachers() {
    this.teacherService.getTeachers().subscribe(data => {
      this.teachers = data;
    });
  }

}
