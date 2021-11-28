import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CounterRoutingModule
  ]
})
export class CounterModule { }
