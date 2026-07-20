import { Routes } from '@angular/router';

import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout';

import { CourseListComponent } from './pages/course-list/course-list';

import { CourseDetailComponent } from './pages/course-detail/course-detail';

import { StudentProfileComponent } from './pages/student-profile/student-profile';

import { NotFoundComponent } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';
import { unsavedGuard } from './guards/unsaved-guard';

export const routes: Routes = [

  {
    path: '',
    component: CoursesLayoutComponent,

    children: [

      {
        path: '',
        component: CourseListComponent
      },

      {
        path: 'courses',
        component: CourseListComponent
      },

      {
        path: 'courses/:id',
        component: CourseDetailComponent
      },

      {
        path: 'profile',
        canActivate: [authGuard],
        component: StudentProfileComponent
      },

    {
  path: 'enroll',

  canDeactivate: [

    unsavedGuard

  ],

  loadComponent: () =>
    import('./pages/reactive-enrollment-form/reactive-enrollment-form')
      .then(m => m.ReactiveEnrollmentForm)
}
    ]

  },

  {
    path: '**',
    component: NotFoundComponent
  }

];