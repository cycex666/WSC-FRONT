import { Component, OnInit, Input } from '@angular/core';
import { IFormInputElement } from '../../IFormInputElement';
import { BaseFormInputElement } from '../abstracts/BaseFormInputElement';

@Component({
  selector: 'lea-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.css']
})
export class DropdownInputComponent extends BaseFormInputElement {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
