import { Component, OnInit } from '@angular/core';
import { BaseFormInputElement } from '../abstracts/BaseFormInputElement';

@Component({
  selector: 'lib-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.css']
})
export class NumericInputComponent extends BaseFormInputElement {
  constructor() { 
    super();
  }

  ngOnInit():void{
    
  }
}
