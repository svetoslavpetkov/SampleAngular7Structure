import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './views/base.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
