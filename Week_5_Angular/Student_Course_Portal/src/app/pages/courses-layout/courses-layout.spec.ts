import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

import { CoursesLayoutComponent } from './courses-layout';

describe('CoursesLayoutComponent', () => {

  let component: CoursesLayoutComponent;
  let fixture: ComponentFixture<CoursesLayoutComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [
        CoursesLayoutComponent
      ],

      providers: [

        provideRouter([]),

        provideHttpClient(),

        provideMockStore({

          initialState: {

            enrollment: {

              enrolledCourseIds: []

            }

          }

        })

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(CoursesLayoutComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});