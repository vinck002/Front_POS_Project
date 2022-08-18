import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home/dashboard.component';



const routes: Routes = [
{path:'',component:DashboardComponent},
{path:'home',component:DashboardComponent},
  {
    path:"realstate",
    loadChildren: () => import('./owner-contract/owner-contract.module').then(x => x.OwnerContractModule)
  },
{
  path:'**', redirectTo:''
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
