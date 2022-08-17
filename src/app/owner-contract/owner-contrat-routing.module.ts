import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContractmainComponent } from './Contractmain/contractmain.component';
import { PropertiesComponent } from './properties/properties.component';
import { AddendumComponent } from './addendum/addendum.component';
import { OwnerContractComponent } from './owner-contract.component';
import { CommentsComponent } from './comments/comments.component';


const routes:Routes=[
{
  path:'',component:OwnerContractComponent,
  children:[
  {path:'',component:OwnerContractComponent},
  {path:"properties",component:PropertiesComponent}
  ,{path:"addendum",component:AddendumComponent}
  ,{path:"comment",component:CommentsComponent}
  ,{path:"properties",component:PropertiesComponent}
  ,{path:"documenta",component:PropertiesComponent}
  ,{path:'**',redirectTo:''}
  ]
}
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],exports:[[RouterModule]]
})
export class OwnerContratRoutingModule { }
