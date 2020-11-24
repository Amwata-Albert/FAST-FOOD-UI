import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

>>>>>>> 165aeae02ab99edec2bcc1eb9315103b6495941b
import { AppRoutingModule } from './app-routing.module';
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    CustomerComponent,
    OrdersComponent,
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layouts/default/default.component';
import { DefaultModule } from './layouts/default/default.module';
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
    
    // MealsComponent,
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent
    // DefaultComponent,
    // DashboardComponent

>>>>>>> 165aeae02ab99edec2bcc1eb9315103b6495941b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    HttpClientModule,
    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule
=======
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    DefaultModule
    // MatButtonModule
>>>>>>> 165aeae02ab99edec2bcc1eb9315103b6495941b
  ],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
