import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { toInteger } from 'lodash';
import { infoProductoBasic, productDTO } from 'src/app/core/models/interfaces/product';
import { ProductService } from 'src/app/core/services/Producto/productoService';

@Component({
  selector: 'app-lista-producoto-inventario',
  templateUrl: './lista-producoto-inventario.component.html',
  styleUrls: ['./lista-producoto-inventario.component.css']
})
export class ListaProducotoInventarioComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {name: string}
    , public dialogRef: MatDialogRef<ListaProducotoInventarioComponent>
    ,public snackBar:MatSnackBar,
    private productService:ProductService) { }


    @Output()  producto = new EventEmitter<infoProductoBasic>();
    idProducto:number = 0;
    close(){
    this.dialogRef.close();
  }

  Product: productDTO[] =[];
  dataSource = new MatTableDataSource<productDTO>();
  cantidadTotaldeRegistro:number = 0;
  paginaActual:number = 1;
  cantidadRegistroMostrar:number = 5;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns:string[] = ['Barcode','Name','Image','Descripcion','inventary_min','price_in','price_out','categoryName']


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

  select(row:any){
    //console.log(row);
    const infoproduct: infoProductoBasic ={id:row.id,barcode:row.barcode,description:row.name,price:row.price_out,discount:false,itbis:18}

    this.dialogRef.close(infoproduct);
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

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }