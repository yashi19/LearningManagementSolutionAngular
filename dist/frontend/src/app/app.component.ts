import { Component } from '@angular/core';
import { BatchService } from './batch/batch.service';
import { CourseService } from './course/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BatchService, CourseService, ]
})
export class AppComponent {
  title = 'app';
}
