import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { infoProductoBasic } from 'src/app/core/models/interfaces/product';

@Component({
  selector: 'app-lista-producoto-inventario',
  templateUrl: './lista-producoto-inventario.component.html',
  styleUrls: ['./lista-producoto-inventario.component.css']
})
export class ListaProducotoInventarioComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {name: string}
    , public dialogRef: MatDialogRef<ListaProducotoInventarioComponent>
    ,public snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  @Output()  producto = new EventEmitter<infoProductoBasic>();
 idProducto:number = 0;
  close(){
    this.dialogRef.close();
  }
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  select(row:any){
    console.log(row);
    const infoproduct: infoProductoBasic ={id:row.position,description:row.name,price:row.weight}

    this.dialogRef.close(infoproduct);
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}