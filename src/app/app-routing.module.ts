import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { MealsComponent } from './modules/meals/meals.component';

const routes: Routes = [{
  path: '', 
  component:  DefaultComponent,
  children: [
    {path: '', component: DashboardComponent},
    {path: 'meals', component: MealsComponent}
  ]
}];

// const routes: Routes = [
//   { path: '', component: DefaultComponent,
//    children:[{
//     path:'', component: DashboardComponent
//   }
// ]},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
