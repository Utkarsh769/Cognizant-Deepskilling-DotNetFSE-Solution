import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../../components/header/header';

import { HomeComponent } from '../home/home';
import { StudentProfileComponent } from '../student-profile/student-profile';

@Component({
  selector: 'app-courses-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    RouterOutlet,
    StudentProfileComponent
  ],
  templateUrl: './courses-layout.html',
  styleUrl: './courses-layout.scss'
})
export class CoursesLayoutComponent {

}