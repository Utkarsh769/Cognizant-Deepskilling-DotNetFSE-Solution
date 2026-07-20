import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.scss'
})
export class EnrollmentFormComponent {

  student = {
    name: '',
    email: '',
    course: ''
  };

  submitted = false;

  onSubmit(): void {

    this.submitted = true;

    console.log(this.student);

  }

}