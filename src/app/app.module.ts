import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
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
    RegisterComponent,
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
    HttpClientModule,
    FormsModule,
    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule
    NgbModule,
    BrowserAnimationsModule,
    DefaultModule
    // MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
