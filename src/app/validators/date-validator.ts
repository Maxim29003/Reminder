import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const creationDate = control.get('creationDate')?.value
  const dueDate = control.get('dueDate')?.value

  if (new Date(creationDate) < new Date(dueDate)){
    return null;
  } else {
    return {dateNotValid: true}
  }
}
