import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from './core/guards/user-guard.guard';
import { DashboardComponent } from './home/dashboard.component';
import { LoginComponent } from './shared/login/login.component';
import { AppComponent } from './app.component';




const routes: Routes = [
{path:'',component:DashboardComponent,canActivate:[UserGuardGuard]},
{path:'home',redirectTo:''},
  {
    path:'entidades',
    loadChildren: () => import('./Entidades/entidades.module').then(x=> x.EntidadesModule)
  }
  // ,{
  //   path:'inventario',
  //   component:AppComponent,
  //   children: [
  //     {path:'',component:ListaInventarioComponent},
  //     {path:'entradas',component:EntradasComponent},
  //     {path:'creacion-entrada',component:OrdenesEntradasComponent},
  //     {path:'edit-entrada/id',component:OrdenesEntradasComponent}
  //   ],canActivate:[UserGuardGuard]
  // }
  // ,{path:'producto',component:ListaProductosComponent},
  // {path:'producto/creacion-producto',component:ProductosCreacionComponent},
  // {path:'producto/creacion-producto/id',component:ProductosCreacionComponent},
  
  // {path:'producto/categorias',component:ListaCategoriaComponent},
  // {path:'producto/creacion-categoria',component:CategoriaCreacionComponent},
  // {path:'producto/creacion-categoria/id',component:CategoriaCreacionComponent}
  // ,{
  //   path:'producto',component:ListaProductosComponent,
  //   children: [
  //     {path:'',component:ListaProductosComponent},
  //     {path:'creacion-producto',component:ProductosCreacionComponent},
  //     {path:'creacion-producto/id',component:ProductosCreacionComponent},
      
  //     {path:'categorias',component:ListaCategoriaComponent},
  //     {path:'creacion-categoria',component:CategoriaCreacionComponent},
  //     {path:'creacion-categoria/id',component:CategoriaCreacionComponent}

  //   ],canActivate:[UserGuardGuard]
  // }
  ,{
    path:'login',component:LoginComponent
  },
{ path: 'inventario', loadChildren: () => import('./Inventario/inventario.module').then(m => m.InventarioModule) },
{
  path:'**', redirectTo:''
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
