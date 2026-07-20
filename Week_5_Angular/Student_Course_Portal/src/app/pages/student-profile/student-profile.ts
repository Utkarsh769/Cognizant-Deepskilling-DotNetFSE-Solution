import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';

import { Observable, combineLatest } from 'rxjs';

import { map } from 'rxjs/operators';

import { Course } from '../../models/course.model';

import { selectAllCourses } from '../../store/course/course.selectors';

import { selectEnrolledCourseIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.scss'
})
export class StudentProfileComponent {

  enrolledCourses$!: Observable<Course[]>;

  constructor(
    private store: Store
  ) {

    this.enrolledCourses$ = combineLatest([

      this.store.select(selectAllCourses),

      this.store.select(selectEnrolledCourseIds)

    ]).pipe(

      map(([courses, ids]) =>

        courses.filter(course =>

          ids.includes(course.id)

        )

      )

    );

  }

}