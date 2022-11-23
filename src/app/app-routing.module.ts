import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from './core/guards/user-guard.guard';
// import { AppComponent } from './app.component';
import { DashboardComponent } from './home/dashboard.component';
import { LoginComponent } from './shared/login/login.component';



const routes: Routes = [
{path:'',component:DashboardComponent,canActivate:[UserGuardGuard]},
{path:'home',redirectTo:''},
  {
    path:"realstate",
    loadChildren: () => import('./owner-contract/owner-contract.module').then(x => x.OwnerContractModule),canActivate:[UserGuardGuard]
  },
  {
    path:'entidades',
    loadChildren: () => import('./Entidades/entidades.module').then(x=> x.EntidadesModule),canActivate:[UserGuardGuard]
  },
  {
    path:'login',component:LoginComponent
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
