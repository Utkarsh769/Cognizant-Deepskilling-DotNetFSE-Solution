import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

import { Course } from '../../models/course.model';

import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';

import { RouterModule } from '@angular/router';

import { selectEnrolledCourseIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    CreditLabelPipe,
    RouterModule
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss'
})
export class CourseCardComponent implements OnInit {

  @Input()
  course!: Course;

  isExpanded = false;

  enrolled$!: Observable<boolean>;

  constructor(

    private store: Store

  ) {}

  ngOnInit(): void {

    this.enrolled$ = this.store.select(

      selectEnrolledCourseIds

    ).pipe(

      map(ids =>

        ids.includes(this.course.id)

      )

    );

  }

  toggleEnrollment(isEnrolled: boolean): void {

    if (isEnrolled) {

      this.store.dispatch(

        EnrollmentActions.unenrollCourse({

          courseId: this.course.id

        })

      );

    }

    else {

      this.store.dispatch(

        EnrollmentActions.enrollCourse({

          courseId: this.course.id

        })

      );

    }

  }

  toggleDetails(): void {

    this.isExpanded = !this.isExpanded;

  }

  get cardClasses() {

    return {

      passed: this.course.gradeStatus === 'passed',

      failed: this.course.gradeStatus === 'failed',

      pending: this.course.gradeStatus === 'pending',

      expanded: this.isExpanded

    };

  }

}