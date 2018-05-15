import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  form: FormGroup;
  courses: Course[];
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required])
    });
    this.getCourses();
  }

  addCourse(form) {
    this.courseService.addCourse(form.value.name).subscribe(data=>{
     this.courses.push(data)
    });
   
  }

  getCourses() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }
}
