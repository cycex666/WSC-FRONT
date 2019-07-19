import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulerComponent } from './component/scheduler.component';

const routes: Routes = [{ path: '', component: SchedulerComponent, data: {title: 'Scheduler'} }];

export const ModuleRoutes: ModuleWithProviders = RouterModule.forChild(routes);
