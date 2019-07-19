import { Component, OnInit } from '@angular/core';
import { BaseFormInputElement } from '../abstracts/BaseFormInputElement';

@Component({
  selector: 'lib-datepicker-input',
  templateUrl: './datepicker-input.component.html',
  styleUrls: ['./datepicker-input.component.css']
})
export class DatepickerInputComponent extends BaseFormInputElement {

  constructor() {
    super();
  }

  ngOnInit() {

  }

}
