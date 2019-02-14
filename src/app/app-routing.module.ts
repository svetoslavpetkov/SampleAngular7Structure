import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { OrderDetailsComponent } from './views/order/details/order-details.component';
import { CreateOrderComponent } from './views/order/create/create-order.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  // order
  { path: 'order/:id/details', component: OrderDetailsComponent },
  { path: 'order/create', component: CreateOrderComponent },
  { path: 'order/list', component: OrderDetailsComponent },
];

const config: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
