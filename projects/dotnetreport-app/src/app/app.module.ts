import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

 
import { HttpClientModule } from '@angular/common/http';
import { DotnetReportModule } from 'projects/dotnetreport-lib/src/lib/dotnetreport-lib.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DotnetReportModule.forRoot('https://localhost:52107'),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
