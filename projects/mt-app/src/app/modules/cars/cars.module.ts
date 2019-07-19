import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { MtGridComponent } from 'projects/mt-core-lib/src/public_api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MtGridComponent,
    CarsRoutingModule
  ]
})
export class CarsModule { }
