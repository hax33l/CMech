import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { CarDashboardComponent } from './components/car-dashboard/car-dashboard.component';
import { ChooseWorkshopComponent } from './components/choose-workshop/choose-workshop.component';
import { DefaultDashboardComponent } from './components/default-dashboard/default-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NewCarComponent } from './components/new-car/new-car.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewRepairComponent } from './components/view-repair/view-repair.component';
import { DefaultUserComponent } from './default-user/default-user.component';
import { EmployeeUserComponent } from './employee-user/employee-user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'acc-type', component: AccountTypeComponent },
  { path: 'tracking/:reg_number/:key', component: ViewRepairComponent },
  { path: 'd-user', component: DefaultUserComponent, 
    children: [
    {
      path: '', 
      component: DefaultDashboardComponent, 
    },
    {
      path: 'car/:reg_number', 
      component: CarDashboardComponent, 
    },
    {
      path: 'new-car',
      component: NewCarComponent,
    }
  ],
 },
 { path: 'workshop', component: ChooseWorkshopComponent },
 { path: 'e-user', component: EmployeeUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
