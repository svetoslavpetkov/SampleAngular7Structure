import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './views/base.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CalendarPickerComponent } from './views/_shared/calendar-picker/calendar-picker.component';
import { TimePickerComponent } from './views/_shared/time-picker/time-picker.component';
import { CreateOrderComponent } from './views/order/create/create-order.component';
import { ListOrderComponent } from './views/order/list/list-order.component';
import { OrderDetailsComponent } from './views/order/details/order-details.component';
import { SingleOrderTileComponent } from './views/order/_shared/single-order-tile/single-order-tile.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BaseComponent,
    HighlightDirective,
    CalendarPickerComponent,
    TimePickerComponent,
    CreateOrderComponent,
    ListOrderComponent,
    OrderDetailsComponent,
    SingleOrderTileComponent
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
