import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorsRoutingModule } from './contractors-routing.module';
import { ContractorsGridComponent } from './components/contractors-grid/contractors-grid.component';
import { MtCoreLibModule } from 'mt-core-lib';

@NgModule({
  declarations: [ContractorsGridComponent],
  imports: [
    CommonModule,
    MtCoreLibModule,
    ContractorsRoutingModule
  ]
})
export class ContractorsModule { }
