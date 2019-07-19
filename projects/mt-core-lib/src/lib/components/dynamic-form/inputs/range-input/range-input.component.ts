import { Component, OnInit } from '@angular/core';
import { BaseFormInputElement } from '../abstracts/BaseFormInputElement';

@Component({
  selector: 'lib-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.css']
})
export class RangeInputComponent extends BaseFormInputElement {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
