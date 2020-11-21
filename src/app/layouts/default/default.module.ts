import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/module/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MealsComponent } from 'src/app/modules/meals/meals.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DahsboardService } from 'src/app/modules/dahsboard.service';
import { CurrentOrdersComponent } from 'src/app/modules/current-orders/current-orders.component';
import { OrderHistoryComponent } from 'src/app/modules/order-history/order-history.component';
import { CustomersComponent } from 'src/app/modules/customers/customers.component';





@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    MealsComponent,
    CustomersComponent,
    OrderHistoryComponent,
    CurrentOrdersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    
  ],
  providers:[
    DahsboardService
  ]
})
export class DefaultModule { }
