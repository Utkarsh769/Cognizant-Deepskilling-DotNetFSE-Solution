import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';

import {
  provideMockStore,
  MockStore
} from '@ngrx/store/testing';

import { CourseCardComponent } from './course-card';

import { Course } from '../../models/course.model';

describe('CourseCardComponent', () => {

  let component: CourseCardComponent;

  let fixture: ComponentFixture<CourseCardComponent>;

  let store: MockStore;

  const mockCourse: Course = {

    id: 1,

    name: 'Data Structures',

    code: 'CS101',

    credits: 4,

    gradeStatus: 'passed'

  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [

        CourseCardComponent

      ],

      providers: [

        provideRouter([]),

        provideMockStore({

          initialState: {

            enrollment: {

              enrolledCourseIds: []

            }

          }

        })

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);

    component = fixture.componentInstance;

    store = TestBed.inject(MockStore);

    component.course = mockCourse;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should display course name', () => {

    const title = fixture.debugElement
      .query(By.css('h3'))
      .nativeElement.textContent;

    expect(title).toContain('Data Structures');

  });

  it('should dispatch enroll action', () => {

    spyOn(store, 'dispatch');

    component.toggleEnrollment(false);

    expect(store.dispatch).toHaveBeenCalled();

  });

  it('should toggle details', () => {

    component.toggleDetails();

    expect(component.isExpanded).toBeTrue();

  });

  it('should return correct classes', () => {

    expect(component.cardClasses.passed).toBeTrue();

    expect(component.cardClasses.failed).toBeFalse();

    expect(component.cardClasses.pending).toBeFalse();

  });

});