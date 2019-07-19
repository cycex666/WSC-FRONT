import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ModuleRoutes } from './scheduler-routing.module';
import { SchedulerComponent } from './component/scheduler.component';
import { MtCoreLibModule } from 'mt-core-lib';

@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule,
    MtCoreLibModule,
    ModuleRoutes,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ]
})
export class SchedulerModule { }
