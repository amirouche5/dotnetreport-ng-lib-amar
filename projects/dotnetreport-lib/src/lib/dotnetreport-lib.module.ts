import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BASE_URL_TOKEN } from './dotnetreport-lib.di';
import { DotnetreportComponent } from './dotnetreport/dotnetreport.component';
import { DotnetdashboardComponent } from './dotnetdashboard/dotnetdashboard.component';
import { DotnetsetupComponent } from './dotnetsetup/dotnetsetup.component';


@NgModule({
  declarations: [
    DotnetreportComponent,
    DotnetdashboardComponent,
    DotnetsetupComponent,
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    DotnetreportComponent,
    DotnetdashboardComponent,
    DotnetsetupComponent
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
