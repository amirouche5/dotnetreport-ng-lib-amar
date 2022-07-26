import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BASE_URL_TOKEN } from './dotnetreport-lib.di';
import { DotnetreportComponent } from './dotnetreport.component';


@NgModule({
  declarations: [
    DotnetreportComponent,
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    DotnetreportComponent,
  ]
})
export class DotnetReportModule {

  static forRoot(base_url: string): ModuleWithProviders<DotnetReportModule> {
    return {
      ngModule: DotnetReportModule,
      providers: [
        {
          provide : BASE_URL_TOKEN,
          useValue : base_url
        }
      ]
    }
  }
 }
