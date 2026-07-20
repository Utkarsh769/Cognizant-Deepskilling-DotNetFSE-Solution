import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrollmentUrl = 'http://localhost:3000/enrollments';

  private courseUrl = 'http://localhost:3000/courses';

  constructor(
    private http: HttpClient
  ) {}

  getEnrolledCourses(): Observable<Course[]> {

    return this.http.get<Course[]>(this.courseUrl);

  }

  enroll(courseId: number): Observable<any> {

    return this.http.post(this.enrollmentUrl, {

      studentId: 1,

      courseId: courseId

    });

  }

  unenroll(id: number): Observable<any> {

    return this.http.delete(`${this.enrollmentUrl}/${id}`);

  }

}