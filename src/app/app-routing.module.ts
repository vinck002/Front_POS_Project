import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from './core/guards/user-guard.guard';
import { DashboardComponent } from './home/dashboard.component';
import { LoginComponent } from './shared/login/login.component';



const routes: Routes = [
{path:'',component:DashboardComponent,canActivate:[UserGuardGuard]},
{path:'home',redirectTo:''},
  {
    path:'entidades',
    loadChildren: () => import('./Entidades/entidades.module').then(x=> x.EntidadesModule)
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
