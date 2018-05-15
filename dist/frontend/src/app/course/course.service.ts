import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Course } from './course';


@Injectable()
export class CourseService {
    private COURSE_URL = '/courses';

    constructor(private http: HttpClient) { }

    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(this.COURSE_URL)
            .catch(this.handleError);
    }

    addCourse(name){
        return this.http.post(this.COURSE_URL,{
            name:name
        }).catch(this.handleError)
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}
