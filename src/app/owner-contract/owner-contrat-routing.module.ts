import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { OwnerContractComponent } from './owner-contract.component';


const routes:Routes=[
{
  path:'',component:OwnerContractComponent,
  children:[
  {path:"properties",component:PropertiesComponent}
  // ,{path:"addendum",component:AddendumComponent}
  // ,{path:"comment",component:CommentsComponent}
  // ,{path:'',component:ContractmainComponent}
  // ,{path:"documents",component:DocumentsComponent}
  // ,{path:"paymentstatus",component:PaymentStatusComponent}
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
