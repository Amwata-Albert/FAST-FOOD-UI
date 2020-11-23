import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { CurrentOrdersComponent } from './modules/current-orders/current-orders.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { MealsComponent } from './modules/meals/meals.component';
import { OrderHistoryComponent } from './modules/order-history/order-history.component';

const routes: Routes = [{
  path: '', 
  component:  DefaultComponent,
  children: [
    {path: '', component: DashboardComponent},
    {path: 'meals', component: MealsComponent},
    {path: 'Customers', component: CustomersComponent},
    {path: 'Current', component: CurrentOrdersComponent},
    {path: 'order', component: OrderHistoryComponent},
    


    {
      path: '',
      redirectTo: 'posts',
      pathMatch: 'full'
    }
  ]
}];

// const routes: Routes = [
//   { path: '', component: DefaultComponent,
//    children:[{
//     path:'', component: DashboardComponent
//   }
// ]},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
