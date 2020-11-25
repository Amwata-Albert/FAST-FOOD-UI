import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DefaultComponent } from './layouts/default/default.component';
// import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MealsComponent } from './modules/meals/meals.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { CommonModule } from "@angular/common";
import { CustomerComponent } from './customer/customer.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'  


 
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MealsComponent } from './modules/meals/meals.component';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { FooterComponent } from './shared/components/footer/footer.component';
// import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
// import { DefaultComponent } from './layouts/default/default.component';
// import { DashboardComponent } from './module/dashboard/dashboard.component';
// import { MatButtonModule } from '@angular/material/button';

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
    
    
 ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatIconModule,
    MatTableModule
    // DefaultComponent,
    // DefaultModule
  
  ],
  exports:[
    MatTableModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MealsComponent]
})
export class AppModule { }
