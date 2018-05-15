import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

import { Lecture } from "./lecture";

@Injectable()
export class LectureService {
  private BATCH_URL = "/batches";
  private COURSE_URL = "/courses";

  constructor(private http: HttpClient) {}

  getLectures(courseId,batchId): Observable<Lecture[]> {
    return this.http.get<Lecture[]>(this.COURSE_URL+"/"+courseId + this.BATCH_URL+'/'+ batchId+"/lectures")
    .catch(this.handleError);
  }

  addLecture(name,teacherId,subjectId, courseId,batchId){
      return this.http.post<Lecture[]>(this.COURSE_URL +"/" + courseId + this.BATCH_URL + "/"+batchId +"/lectures" ,{
          name:name,
          teacherId :teacherId,
          subjectId:subjectId
      }).catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}
