import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractorsGridComponent } from './components/contractors-grid/contractors-grid.component';

const routes: Routes = [
  { path: '', component: ContractorsGridComponent, data: { title: 'Contractors' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorsRoutingModule { }
