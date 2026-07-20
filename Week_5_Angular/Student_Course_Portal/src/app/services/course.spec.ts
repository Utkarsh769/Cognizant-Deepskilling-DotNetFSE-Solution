import { TestBed } from '@angular/core/testing';

import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';

import {
  provideHttpClient
} from '@angular/common/http';

import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('CourseService', () => {

  let service: CourseService;

  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [

    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },

    {
      id: 2,
      name: 'ASP.NET Core',
      code: 'NET201',
      credits: 3,
      gradeStatus: 'pending'
    }

  ];

  beforeEach(() => {

    TestBed.configureTestingModule({

      providers: [

        provideHttpClient(),

        provideHttpClientTesting(),

        CourseService

      ]

    });

    service = TestBed.inject(CourseService);

    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {

    httpMock.verify();

  });

  it('should be created', () => {

    expect(service).toBeTruthy();

  });

  it('should return courses', () => {

    service.getCourses().subscribe(courses => {

      expect(courses.length).toBe(2);

      expect(courses[0].name).toBe('Angular');

    });

    const req = httpMock.expectOne(
      'http://localhost:3000/courses'
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockCourses);

  });

  it('should handle server error', () => {

    service.getCourses().subscribe({

      next: () => fail('Expected an error'),

      error: error => {

        expect(error.status).toBe(500);

      }

    });

    // retry(2) issues sequential requests.
    // Flush each one as it appears.

    for (let i = 0; i < 3; i++) {

      const req = httpMock.expectOne(
        'http://localhost:3000/courses'
      );

      req.flush(
        'Server Error',
        {
          status: 500,
          statusText: 'Internal Server Error'
        }
      );

    }

  });

});