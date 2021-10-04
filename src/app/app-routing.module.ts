import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDashboardComponent } from './components/car-dashboard/car-dashboard.component';
import { DefaultDashboardComponent } from './components/default-dashboard/default-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultUserComponent } from './default-user/default-user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'd-user', component: DefaultUserComponent, 
    children: [
    {
      path: 'car/:reg_number', // child route path
      component: CarDashboardComponent, // child route component that the router renders
    },
  ],
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
