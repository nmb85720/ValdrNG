import {AbstractControl, ValidationErrors} from '@angular/forms';

export interface BaseValidator {
  [validator: string]: {
    message: string;
  }
}

export interface EmailValidator {
  email: BaseValidator;
}

interface PatternValidator {
  pattern: BaseValidator & {
    value: string | RegExp;
  }
}

interface SizeValidator {
  size: BaseValidator & {
    min: number;
    max: number;
  }
}

interface RequiredValidator {
  required: BaseValidator;
}

export interface ValdrModelConstraints {
  [field: string]: BaseValidator | EmailValidator | PatternValidator | SizeValidator | RequiredValidator;
}

export interface ValdrConstraints {
  [model: string]: ValdrModelConstraints;
}

type ValdrValidationErrors = ValidationErrors & { message?: string };

export interface ValdrValidationFn {
  (control: AbstractControl): ValdrValidationErrors | null
}
