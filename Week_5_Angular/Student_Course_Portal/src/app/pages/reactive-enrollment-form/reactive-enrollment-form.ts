import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (value && value.toString().startsWith('XX')) {
    return { noCourseCode: true };
  }

  return null;
}

export function simulateEmailCheck(): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const email = control.value;

        if (email && email.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }
      }, 800);
    });
  };
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.scss',
})
export class ReactiveEnrollmentForm implements OnInit {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],

      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck()]],

      courseId: ['', [Validators.required, noCourseCode]],

      preferredSemester: ['Odd', Validators.required],

      agreeToTerms: [false, Validators.requiredTrue],

      additionalCourses: this.fb.array<FormControl<string | null>>([]),
    });
  }

  get additionalCourses(): FormArray<FormControl<string | null>> {
    return this.enrollForm.get('additionalCourses') as FormArray<FormControl<string | null>>;
  }

  addCourse(): void {
    this.additionalCourses.push(
      new FormControl<string | null>('', {
        validators: Validators.required,
      }),
    );
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // enrollForm.value returns values of enabled controls only.
  // enrollForm.getRawValue() returns values of all controls,
  // including disabled controls.

  onSubmit(): void {
    console.log('Form Value:', this.enrollForm.value);

    console.log('Raw Value:', this.enrollForm.getRawValue());
  }
}
