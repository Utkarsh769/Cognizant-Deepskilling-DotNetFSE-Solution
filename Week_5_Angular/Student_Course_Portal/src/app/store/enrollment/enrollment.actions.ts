import { createAction, props } from '@ngrx/store';

export const enrollCourse = createAction(
  '[Enrollment] Enroll',
  props<{ courseId: number }>()
);

export const unenrollCourse = createAction(
  '[Enrollment] Unenroll',
  props<{ courseId: number }>()
);