import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layouts/default/default.component';
import { DefaultModule } from './layouts/default/default.module';
import { OrderComponent } from './order/order.component';
import { MealsComponent } from './meals/meals.component';
import { NavbarComponent } from './navbar/navbar.component';
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
    OrderComponent,
    MealsComponent,
    NavbarComponent,
    
    // MealsComponent,
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent
    // DefaultComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
    // MatButtonModule
  ],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
