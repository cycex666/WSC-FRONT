import { Component, OnInit, Input } from '@angular/core';
import { IFormInputElement } from '../../IFormInputElement';
import { BaseFormInputElement } from '../abstracts/BaseFormInputElement';


@Component({
  selector: 'lea-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent extends BaseFormInputElement {

  constructor() {
    super();
  }

  ngOnInit() {}
}
