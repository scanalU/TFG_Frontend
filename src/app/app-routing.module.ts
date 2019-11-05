import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { RestDetailComponent }  from './rest-detail/rest-detail.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';


const routes: Routes = [
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: RestDetailComponent },
  { path: 'main', component: DashboardComponent },
  { path: 'newAccount', component: InputUserDataFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }