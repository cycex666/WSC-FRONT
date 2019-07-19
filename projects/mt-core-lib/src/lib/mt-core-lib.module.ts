import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MtGridComponent } from './components/mt-grid/mt-grid.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [MtGridComponent, DynamicFormComponent],
  imports: [
    TableModule,
    CommonModule
  ],
  exports: [MtGridComponent, DynamicFormComponent]
})
export class MtCoreLibModule { }
