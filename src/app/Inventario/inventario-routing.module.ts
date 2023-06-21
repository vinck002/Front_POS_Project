import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './inventario.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { ProductosCreacionComponent } from './productos/productos-creacion/productos-creacion.component';
import { ListaCategoriaComponent } from './categoria/lista-categoria/lista-categoria.component';
import { CategoriaCreacionComponent } from './categoria/categoria-creacion/categoria-creacion.component';
import { StockComponent } from './stock/stock.component';
import { EntradasComponent } from './entradas/entradas.component';
import { CreacionEntradaComponent } from './entradas/creacion-entrada/creacion-entrada.component';

const routes: Routes = [

    {path:'',component:InventarioComponent},
    {path:'productos',component:ListaProductosComponent},
    {path:'creacion-producto',component:ProductosCreacionComponent},
    {path:'creacion-producto/:id',component:ProductosCreacionComponent},
    
    {path:'categorias',component:ListaCategoriaComponent},
    {path:'creacion-categoria',component:CategoriaCreacionComponent},
    {path:'creacion-categoria/:id',component:CategoriaCreacionComponent}
    
   ,{path:'stock',component:StockComponent}
    ,{path:'ordenes-entrada',component:EntradasComponent}
    ,{path:'creacion-entrada',component:CreacionEntradaComponent},
    {path:'creacion-entrada/:id',component:CreacionEntradaComponent}

   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
