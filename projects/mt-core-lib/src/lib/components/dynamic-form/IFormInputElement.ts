import { InputType } from './InputType';
import { EventEmitter } from '@angular/core';

export interface IFormInputElement {
  InputType: InputType;
  FieldName: string;
  Label: string;
  Placeholder?: string;
  Value: any;
  ValidationRegex?: string;
  Required: boolean;
  RequiredMessage?: string;
  OnValueChanged?: EventEmitter<any>;
  Multiline?: boolean;
}

export interface IDropDownInputElement extends IFormInputElement {
  ItemsSource: any;
  OnSelectionChanged?: EventEmitter<any>;
}
