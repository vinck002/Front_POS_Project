import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { toInteger } from 'lodash';
import { Product, productDTO } from 'src/app/core/models/interfaces/product';
import { ProductService } from 'src/app/core/services/Producto/productoService';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  constructor(private productService:ProductService) { }
  
  dataSource = new MatTableDataSource<productDTO>();
  Product: productDTO[] =[];
cantidadTotaldeRegistro:number = 0;
paginaActual:number = 1;
cantidadRegistroMostrar:number = 5;
@ViewChild(MatSort, { static: true }) sort!: MatSort;
@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns:string[] = ['Name','Image','Descripcion','inventary_min','price_in','price_out','categoryName','is_active','Accion']

//*****************CHECKBOX DENTRO DEL TABLE***************
  selected: boolean[] = [];
  toggleCheckbox(index: number) {
    //this.selected[index] = !this.selected[index];
  }
//*************************************** *******************/

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual,this.cantidadRegistroMostrar);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  DeleteEntidad(id:number){

    this.productService.delete(id).subscribe(()=>
    {
      this.cargarRegistros(this.paginaActual,this.cantidadRegistroMostrar);
    });
  }
  cargarRegistros(pagina:number,cantidadAMostrar:number){

  this.productService.getAll(pagina,cantidadAMostrar).subscribe(
    (response: HttpResponse<productDTO[]>) =>{
      this.Product = response.body?? [];
      this.cantidadTotaldeRegistro =toInteger(response.headers.get('cantidadTotalRegistro')?? 0);
      this.dataSource = new MatTableDataSource<productDTO>(this.Product)
       this.dataSource.paginator = this.paginator;
    }
  )
}

actualizarPaginacion(datos:PageEvent) {
  this.paginaActual = datos.pageIndex+1;
  this.cantidadRegistroMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual,this.cantidadRegistroMostrar);
  }
}