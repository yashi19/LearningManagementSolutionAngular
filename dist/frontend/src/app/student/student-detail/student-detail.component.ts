import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Student } from "../student";
import { StudentService } from "../student.service";
import { BatchService } from "../../batch/batch.service";
@Component({
  selector: "app-student-detail",
  templateUrl: "./student-detail.component.html",
  styleUrls: ["./student-detail.component.css"]
})
export class StudentDetailComponent implements OnInit {
  student: any;
  batchId:number;
  batches;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private batchService:BatchService
  ) {}

  ngOnInit() {
    this.getStudentById();
    this.batchService.getBatches().subscribe(batches=>{
      this.batches=batches;
    })
  }

  getStudentById() {
    const studentId = +this.route.snapshot.paramMap.get("id");
    this.studentService.getStudentById(studentId).subscribe(stu => {
      console.log(stu);
      this.student = stu;
    });
  }

  selectBatch(event) {
    this.batchId = event.target.value;
    
  }

  enrollBatch(){

    const studentId = +this.route.snapshot.paramMap.get("id");
    this.studentService.enrollBatch(studentId,this.batchId).subscribe(enrolledStudent=>{
      alert('You have enrolled in batch ')
      this.getStudentById();
    })
  }
}
