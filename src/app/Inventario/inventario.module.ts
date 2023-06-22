import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { ProductosCreacionComponent } from './productos/productos-creacion/productos-creacion.component';
import { EntradasComponent } from './entradas/entradas.component';
import { MaterialModule } from '../material.module';
import { CoreModule } from "../core/core.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriaCreacionComponent } from './categoria/categoria-creacion/categoria-creacion.component';
import { StockComponent } from './stock/stock.component';
import { CreacionEntradaComponent } from './entradas/creacion-entrada/creacion-entrada.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ListaProducotoInventarioComponent } from './dialog/lista-producoto-inventario/lista-producoto-inventario.component';


@NgModule({
    declarations: [
        InventarioComponent,
        ListaProductosComponent,
        ProductosCreacionComponent,
        StockComponent,
        CategoriaCreacionComponent,
        EntradasComponent,
        CreacionEntradaComponent,
        ListaProducotoInventarioComponent
    ],
    imports: [
        CurrencyMaskModule,
        CommonModule,
        InventarioRoutingModule,
        MaterialModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class InventarioModule { }
