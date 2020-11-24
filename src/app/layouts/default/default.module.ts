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
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import {MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';


// import { MatFormFieldModule } from '@angular/material/form-field';




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
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    
],
  exports:[
    MatDialogModule
  ],
  providers:[
    DahsboardService
  ],
  entryComponents:[MealsComponent]
})
export class DefaultModule { }
