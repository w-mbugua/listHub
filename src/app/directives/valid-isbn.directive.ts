import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, Validator, FormControl } from '@angular/forms';


@Directive({
  selector: '[appValidISBN]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: ValidISBNDirective, multi: true}
  ]
})
export class ValidISBNDirective {
  static validateISBN(control: FormControl): ValidationErrors | null{
    if(control.value.lenth < 13){
      return { isbn: 'ISBN number must be 13 digits long'}
    }
    if(!control.value.startsWith('penguin')){
      return {isbn: 'Value should start with penguin'}
    }
    return null;

  }
  validate(c: FormControl): ValidationErrors | null{
    return ValidISBNDirective.validateISBN(c);
  }
  constructor() { }



}
