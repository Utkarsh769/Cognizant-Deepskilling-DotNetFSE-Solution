import { CanDeactivateFn } from '@angular/router';

import { ReactiveEnrollmentForm } from '../pages/reactive-enrollment-form/reactive-enrollment-form';

export const unsavedGuard: CanDeactivateFn<ReactiveEnrollmentForm> = (

  component

) => {

  if (!component.enrollForm) {

    return true;

  }

  if (!component.enrollForm.dirty) {

    return true;

  }

  return confirm(

    'You have unsaved changes. Leave this page?'

  );

};