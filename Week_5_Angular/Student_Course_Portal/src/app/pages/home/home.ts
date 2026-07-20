import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  totalCourses = 0;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {

    this.totalCourses = 5;

    console.log('HomeComponent initialised - courses loaded');

  }

  ngOnDestroy(): void {

    console.log('HomeComponent destroyed');

  }

  onEnrollClick(): void {

    this.message = 'Enrollment opened!';

  }

  searchCourse(): void {

    this.router.navigate(
      ['/courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );

  }

}