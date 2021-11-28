import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FetchDataRoutingModule } from './fetch-data-routing.module';
import { FetchDataComponent } from './fetch-data.component';


@NgModule({
  declarations: [
    FetchDataComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FetchDataRoutingModule
  ]
})
export class FetchDataModule { }
