import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { RestaurantComponent }  from './restaurant/restaurant.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { MLComponent } from './ml/ml.component';

import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  { path: 'main', component: DashboardComponent },
  { path: 'newAccount', component: InputUserDataFormComponent },
  { path: 'ML', component: MLComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }