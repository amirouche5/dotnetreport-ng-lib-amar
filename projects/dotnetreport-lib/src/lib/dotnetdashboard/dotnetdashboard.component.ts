import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BASE_URL_TOKEN } from './../dotnetreport-lib.di';

declare var ko: any;
declare var reportViewModel: any;
declare var $: any;

@Component({
  selector: 'lib-dotnetdashboard',
  templateUrl: './dotnetdashboard.component.html',
  styleUrls: ['./dotnetdashboard.component.css']
})

export class DotnetdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
