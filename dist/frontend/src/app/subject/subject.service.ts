import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

import { Subject } from "./subject";

@Injectable()
export class SubjectService {
  private SUBJECT_URL = "/subjects";

  constructor(private http: HttpClient) {}

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.SUBJECT_URL).catch(this.handleError) .catch(this.handleError);;
  }

  addSubject(form,courseId) {
    return this.http
      .post<Subject[]>(this.SUBJECT_URL, {
        name: form.value.name,
        courseId: courseId
      })
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}
