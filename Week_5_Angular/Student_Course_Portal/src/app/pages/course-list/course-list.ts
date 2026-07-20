import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { CourseCardComponent } from '../../components/course-card/course-card';

import { Course } from '../../models/course.model';

import * as CourseActions from '../../store/course/course.actions';

import { selectAllCourses } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent,
    RouterModule
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.scss'
})
export class CourseListComponent implements OnInit {

  courses$!: Observable<Course[]>;

  constructor(

    private store: Store,

    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {

    this.courses$ = this.store.select(

      selectAllCourses

    );

    this.store.dispatch(

      CourseActions.loadCourses()

    );

  }

  addSampleCourse(): void {

    const newCourse: Course = {

      id: 0,

      name: 'Docker',

      code: 'DOC601',

      credits: 4,

      gradeStatus: 'pending'

    };

    this.store.dispatch(

      CourseActions.addCourse({

        course: newCourse

      })

    );

  }

  updateFirstCourse(): void {

    this.store.dispatch(

      CourseActions.updateCourse({

        course: {

          id: 1,

          name: 'Angular Advanced',

          code: 'ANG101',

          credits: 5,

          gradeStatus: 'passed'

        }

      })

    );

  }

  deleteLastCourse(): void {

    this.courses$.subscribe(courses => {

      if (!courses.length) {

        return;

      }

      this.store.dispatch(

        CourseActions.deleteCourse({

          id: courses[courses.length - 1].id

        })

      );

    });

  }

  trackByCourseId(

    index: number,

    course: Course

  ): number {

    return course.id;

  }

}