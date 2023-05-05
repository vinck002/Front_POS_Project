import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinerComponent } from './spiner/spiner.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DashboardComponent } from '../home/dashboard.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    SpinerComponent,
    DialogContentComponent,
    DashboardComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule
    ,MaterialModule,
    FlexLayoutModule
  ],exports:
  [
    DialogContentComponent,
    SidebarComponent,
    HeaderComponent,
    SpinerComponent
  ]
})
export class SharedModule { }
