import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AdvancedRouterModule, QueryParamsConfig, QUERY_PARAMS_CONFIG } from '@mintplayer/ng-router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdvancedRouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [ HttpClient ]
      }
    }),
    PagesModule,
  ],
  providers: [
    {
      provide: QUERY_PARAMS_CONFIG,
      useValue: <QueryParamsConfig>{
        lang: 'preserve'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
