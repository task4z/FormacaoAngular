import { FormControl, ValidationErrors } from '@angular/forms';

export function ssValidator(control: FormControl): ValidationErrors | null{
  const value = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ss: {description: 'cenas mal'}};


}
