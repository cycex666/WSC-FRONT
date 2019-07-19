import { Component, Input, OnInit } from '@angular/core';
import { IFormInputElement } from '../../IFormInputElement';
import { FormGroup } from '@angular/forms';

export abstract class BaseFormInputElement implements OnInit{    
    @Input() inputDef: IFormInputElement;
    @Input() form: FormGroup;

    abstract ngOnInit(): void;
}