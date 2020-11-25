import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { CommonModule } from "@angular/common";
import { CustomerComponent } from './customer/customer.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MealsComponent } from './meals/meals.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    OrdersComponent,
    OrderlistComponent,
    CustomerComponent,
    FoodlistComponent,
    OrderComponent,
    MealsComponent,
    NavbarComponent,
  
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
  ],

 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
