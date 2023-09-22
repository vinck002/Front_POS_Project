import { HttpResponse } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { toInteger } from 'lodash';
import { Entity, Small_EntityInfoDTO } from 'src/app/core/models/interfaces/Entidades/Entidad';
import { productDTO } from 'src/app/core/models/interfaces/product';
import { EntidadService } from 'src/app/core/services/entidad-service';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css']
})
export class ListaProveedoresComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {name: string}
    , public dialogRef: MatDialogRef<ListaProveedoresComponent>
    ,public snackBar:MatSnackBar,
    private EntidadServices:EntidadService) { }

    dataSource = new MatTableDataSource<Entity>();
    cantidadTotaldeRegistro:number = 0;
    paginaActual:number = 1;
    cantidadRegistroMostrar:number = 5;
    @ViewChild(MatSort, { static: true }) sort!: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
    displayedColumns:string[] = ['identification','names','lastname','company','phone1','RNC']


    proveedores:Entity[] = [];
    ngOnInit(): void {
     this.cargarRegistros(this.paginaActual,this.cantidadRegistroMostrar);
    }
    cargarRegistros(pagina:number,cantidadAMostrar:number){

      this.EntidadServices.GetAll('proveedor',pagina,cantidadAMostrar).subscribe(
        (response: HttpResponse<Entity[]>) =>{
          this.proveedores = response.body?? [];
          this.cantidadTotaldeRegistro = toInteger(response.headers.get('cantidadTotalRegistro')?? 0);
          this.dataSource = new MatTableDataSource<Entity>(this.proveedores)
           this.dataSource.paginator = this.paginator;
        }
      )
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
     
actualizarPaginacion(datos:PageEvent) {
  this.paginaActual = datos.pageIndex+1;
  this.cantidadRegistroMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual,this.cantidadRegistroMostrar);
  }

  select(row:any){

    this.dialogRef.close(row);
  }


}
