import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { CarDashboardComponent } from './components/car-dashboard/car-dashboard.component';
import { ChooseWorkshopComponent } from './components/choose-workshop/choose-workshop.component';
import { DefaultDashboardComponent } from './components/default-dashboard/default-dashboard.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeePartStorageComponent } from './components/employee-part-storage/employee-part-storage.component';
import { EmployeeRepairOrderComponent } from './components/employee-repair-order/employee-repair-order.component';
import { LoginComponent } from './components/login/login.component';
import { NewCarComponent } from './components/new-car/new-car.component';
import { OwnerNewWorkshopComponent } from './components/owner-new-workshop/owner-new-workshop.component';
import { OwnerRepairOrderComponent } from './components/owner-repair-order/owner-repair-order.component';
import { OwnerSettingsComponent } from './components/owner-settings/owner-settings.component';
import { OwnerWorkshopComponent } from './components/owner-workshop/owner-workshop.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewRepairComponent } from './components/view-repair/view-repair.component';
import { DefaultUserComponent } from './default-user/default-user.component';
import { EmployeeUserComponent } from './employee-user/employee-user.component';
import { HomeComponent } from './home/home.component';
import { OwnerUserComponent } from './owner-user/owner-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'acc-type', component: AccountTypeComponent },
  { path: 'tracking/:reg_number/:key', component: ViewRepairComponent },
  {
    path: 'd-user', component: DefaultUserComponent,
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
  { path: 'e-workshop', component: ChooseWorkshopComponent },
  {
    path: 'e-user', component: EmployeeUserComponent,
    children: [
      {
        path: 'storage',
        component: EmployeePartStorageComponent,
      },
      {
        path: 'rep-orders',
        component: EmployeeRepairOrderComponent,
      },
    ],
  },
  { path: 'o-workshop', component: OwnerWorkshopComponent },
  { path: 'o-new', component: OwnerNewWorkshopComponent },
  {
    path: 'o-user', component: OwnerUserComponent,
    children: [
      {
        path: 'storage',
        component: EmployeePartStorageComponent,
      },
      {
        path: 'rep-orders',
        component: OwnerRepairOrderComponent,
      },
      {
        path: 'settings',
        component: OwnerSettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
