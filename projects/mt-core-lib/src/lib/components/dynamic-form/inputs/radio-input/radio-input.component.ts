import { Component, OnInit } from '@angular/core';
import { BaseFormInputElement } from '../abstracts/BaseFormInputElement';

@Component({
  selector: 'lib-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css']
})
export class RadioInputComponent extends BaseFormInputElement {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
