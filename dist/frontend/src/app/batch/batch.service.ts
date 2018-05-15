import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

import { Batch } from "./batch";

@Injectable()
export class BatchService {
  private BATCH_URL = "/batches";
  private COURSE_URL = "/courses";

  constructor(private http: HttpClient) {}

  getBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.BATCH_URL).catch(this.handleError);
  }

  getUpcomingBatches(): Observable<Batch[]> {
    return this.http
      .get<Batch[]>(this.BATCH_URL + "/upcoming")
      .catch(this.handleError);
  }

  addBatch(name,startDate,courseId){
      return this.http.post<Batch[]>(this.COURSE_URL +"/" + courseId + "/batches" ,{
          name:name,
          startDate:startDate
      }).catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}
