import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CourseService } from '../../services/course';

import * as CourseActions from './course.actions';

import { catchError, map, mergeMap } from 'rxjs/operators';

import { of } from 'rxjs';

@Injectable()
export class CourseEffects {

  private actions$ = inject(Actions);

  private courseService = inject(CourseService);

  loadCourses$ = createEffect(() =>

    this.actions$.pipe(

      ofType(CourseActions.loadCourses),

      mergeMap(() =>

        this.courseService.getCourses().pipe(

          map(courses =>
            CourseActions.loadCoursesSuccess({ courses })
          ),

          catchError(error =>
            of(CourseActions.loadCoursesFailure({ error }))
          )

        )

      )

    )

  );

  addCourse$ = createEffect(() =>

    this.actions$.pipe(

      ofType(CourseActions.addCourse),

      mergeMap(action =>

        this.courseService.addCourse(action.course).pipe(

          map(() => CourseActions.loadCourses()),

          catchError(error =>
            of(CourseActions.loadCoursesFailure({ error }))
          )

        )

      )

    )

  );

  updateCourse$ = createEffect(() =>

    this.actions$.pipe(

      ofType(CourseActions.updateCourse),

      mergeMap(action =>

        this.courseService.updateCourse(action.course).pipe(

          map(() => CourseActions.loadCourses()),

          catchError(error =>
            of(CourseActions.loadCoursesFailure({ error }))
          )

        )

      )

    )

  );

  deleteCourse$ = createEffect(() =>

    this.actions$.pipe(

      ofType(CourseActions.deleteCourse),

      mergeMap(action =>

        this.courseService.deleteCourse(action.id).pipe(

          map(() => CourseActions.loadCourses()),

          catchError(error =>
            of(CourseActions.loadCoursesFailure({ error }))
          )

        )

      )

    )

  );

}