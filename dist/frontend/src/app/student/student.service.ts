import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

import { Student } from "./student";

@Injectable()
export class StudentService {
  private STUDENT_URL = "/students";

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.STUDENT_URL).catch(this.handleError);
  }

  getStudentById(studentId):Observable<Student>{

    return this.http.get(this.STUDENT_URL+"/"+studentId).catch(this.handleError);
  }

  addStudent(name) {
    return this.http
      .post<Student[]>(this.STUDENT_URL, {
        name: name
      })
      .catch(this.handleError);
  }


  enrollBatch(studentId,batchId){
       return  this.http.post(this.STUDENT_URL+'/'+studentId+'/batches/'+batchId,{}).catch(this.handleError)
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}
