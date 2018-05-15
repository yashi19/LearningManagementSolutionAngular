import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

import { Teacher } from "./teacher";

@Injectable()
export class TeacherService {
  private TEACHER_URL = "/teachers";

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.TEACHER_URL).catch(this.handleError);
  }

  addTeacher(form,subjectId) {
    return this.http
      .post<Teacher[]>(this.TEACHER_URL, {
        name: form.value.name,
        subjectId: subjectId
      })
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}
