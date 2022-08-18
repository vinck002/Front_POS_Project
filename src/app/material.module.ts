import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import{ MatListModule}from '@angular/material/list';
import{ MatMenuModule}from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatProgressBarModule
    
  ],exports:[
    MatExpansionModule,
    MatProgressBarModule,
    MatCardModule,
    CommonModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
