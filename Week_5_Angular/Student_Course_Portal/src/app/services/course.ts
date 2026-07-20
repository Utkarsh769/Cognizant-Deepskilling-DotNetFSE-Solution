import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import {
  map,
  tap,
  retry,
  catchError
} from 'rxjs/operators';

import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/courses';

  constructor(
    private http: HttpClient
  ) {}

  getCourses(): Observable<Course[]> {

    return this.http.get<Course[]>(this.apiUrl).pipe(

      retry(2),

      tap(() => {

        console.log('Courses Loaded Successfully');

      }),

      map(courses =>

        courses.sort((a, b) =>
          a.name.localeCompare(b.name)
        )

      ),

      catchError(error => {

        console.error('HTTP Error', error);

        return throwError(() => error);

      })

    );

  }

  getCourseById(id: number): Observable<Course> {

    return this.http.get<Course>(
      `${this.apiUrl}/${id}`
    ).pipe(

      retry(2),

      catchError(error => {

        console.error(error);

        return throwError(() => error);

      })

    );

  }

  addCourse(course: Course): Observable<Course> {

    return this.http.post<Course>(
      this.apiUrl,
      course
    );

  }

  updateCourse(course: Course): Observable<Course> {

    return this.http.put<Course>(
      `${this.apiUrl}/${course.id}`,
      course
    );

  }

  deleteCourse(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );

  }

}