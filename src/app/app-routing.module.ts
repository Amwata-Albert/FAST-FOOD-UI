import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrdersComponent } from './orders/orders.component';
import { FoodlistComponent } from './foodlist/foodlist.component'



const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: '', component: LoginComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'orders', component: OrderlistComponent},
  { path: 'status', component: OrdersComponent},
  { path: 'home', component: FoodlistComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
