import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EntidadRoutingModule } from './entidad-routing.module';
import { EntidadesComponent } from './entidades.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MaterialModule } from '../material.module';
import{ HttpClientModule}from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { EntidadformComponent } from './entidadform/entidadform.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaProveedoresComponent } from './lista-proveedores/lista-proveedores.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    EntidadesComponent,
    ProveedorComponent,
    ClienteComponent,
    EntidadformComponent,
    ListaClientesComponent,
    ListaProveedoresComponent
  ],
  imports: [
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    CommonModule,
    EntidadRoutingModule
  ]
})
export class EntidadesModule { }
