import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { toInteger } from 'lodash';
import { category } from 'src/app/core/models/interfaces/category';
import { CategoryService } from 'src/app/core/services/category/category.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {
  constructor(private categoryService:CategoryService) { }
  
  dataSource = new MatTableDataSource<category>();
  categories: category[] =[];
cantidadTotaldeRegistro:number = 0;
paginaActual:number = 1;
cantidadRegistroMostrar:number = 5;
@ViewChild(MatSort, { static: true }) sort!: MatSort;
@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns:string[] = ['Name','Image','Descripcion','Accion']
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

    this.categoryService.delete(id).subscribe(()=>
    {
      this.cargarRegistros(this.paginaActual,this.cantidadRegistroMostrar);
    });
  }
  cargarRegistros(pagina:number,cantidadAMostrar:number){
  this.categoryService.getAll(pagina,cantidadAMostrar).subscribe(
    (response: HttpResponse<category[]>) =>{
      this.categories = response.body?? [];
      this.cantidadTotaldeRegistro =toInteger(response.headers.get('cantidadTotalRegistro')?? 0);
      
      this.dataSource = new MatTableDataSource<category>(this.categories)
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
