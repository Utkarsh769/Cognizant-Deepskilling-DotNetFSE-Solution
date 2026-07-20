import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';

import { By } from '@angular/platform-browser';

import {
  provideMockStore,
  MockStore
} from '@ngrx/store/testing';

import { CourseListComponent } from './course-list';

describe('CourseListComponent', () => {

  let component: CourseListComponent;

  let fixture: ComponentFixture<CourseListComponent>;

  let store: MockStore;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [

        CourseListComponent

      ],

      providers: [

        provideRouter([]),

        provideMockStore({

          initialState: {

            courses: {

              courses: [],

              loading: false,

              error: null

            },

            enrollment: {

              enrolledCourseIds: []

            }

          }

        })

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);

    component = fixture.componentInstance;

    store = TestBed.inject(MockStore);

  });

  it('should create', () => {

    fixture.detectChanges();

    expect(component).toBeTruthy();

  });
});