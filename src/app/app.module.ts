import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layouts/default/default.component';
import { DefaultModule } from './layouts/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MealsComponent } from './modules/meals/meals.component';

 
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
    HttpClientModule,
    FormsModule,
    DefaultModule,
    
    // MatFormFieldModule,
    // MatButtonModule
  ],
  
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule
  // ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MealsComponent]
})
export class AppModule { }
