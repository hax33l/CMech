import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DefaultUserComponent } from './default-user/default-user.component';
import { DefaultDashboardComponent } from './components/default-dashboard/default-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { AuthInterceptorProvider } from './http-interceptors/auth.interceptor';
import { CarDashboardComponent } from './components/car-dashboard/car-dashboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NewCarComponent } from './components/new-car/new-car.component';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewRepairComponent } from './components/view-repair/view-repair.component';
import { RepairDialogComponent } from './components/repair-dialog/repair-dialog.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { EmployeeUserComponent } from './employee-user/employee-user.component';
import { ChooseWorkshopComponent } from './components/choose-workshop/choose-workshop.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeRepairOrderComponent } from './components/employee-repair-order/employee-repair-order.component';
import { EmployeePartStorageComponent } from './components/employee-part-storage/employee-part-storage.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DefaultUserComponent,
    DefaultDashboardComponent,
    CarDashboardComponent,
    NewCarComponent,
    AccountTypeComponent,
    ViewRepairComponent,
    RepairDialogComponent,
    EmployeeUserComponent,
    ChooseWorkshopComponent,
    EmployeeDashboardComponent,
    EmployeeRepairOrderComponent,
    EmployeePartStorageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgbCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    ClipboardModule,
    MatTooltipModule,
    MatSelectModule,
    MatTabsModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
