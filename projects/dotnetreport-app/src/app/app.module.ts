import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DotnetReportModule } from 'dotnetreport-ng';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DotnetReportModule.forRoot('https://localhost:52107'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
