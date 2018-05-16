import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';
import { StudentService } from '../../student/student.service';
import { Student } from '../../student/student';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-students-by-batch',
  templateUrl: './show-students-by-batch.component.html',
  styleUrls: ['./show-students-by-batch.component.css']
})
export class ShowStudentsByBatchComponent implements OnInit {

  constructor(private studentService: StudentService,  private route: ActivatedRoute) { }
 batchStudents: any=[]
  courseId= +this.route.snapshot.paramMap.get('courseId')
  batchId= +this.route.snapshot.paramMap.get('batchId')
  ngOnInit():void {
    this.getStudentsByBatch();
  }

  getStudentsByBatch(){
    this.studentService.showStudentsByBatch(this.courseId,this.batchId).subscribe(data=>{
      this.batchStudents=data;
     
      
    })
  }


}
