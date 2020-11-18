import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DeleteItemsComponent } from './delete-items/delete-items.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteItemsComponent
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> 4a8ada90129f4c38157a0477c6d2e2ce3c2a07f0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
