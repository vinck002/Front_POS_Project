import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
import { OperationDetailDTO } from 'src/app/core/models/interfaces/operacion';
import { ListaProducotoInventarioComponent } from '../dialog/lista-producoto-inventario/lista-producoto-inventario.component';


@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  Producto:string ='';


  constructor(private formBuilder:FormBuilder
    ,public dialog: MatDialog
    ,public snackBar:MatSnackBar) { }
  public form!:FormGroup
  itbis_included = true;
  // resultsLength = 0;
  // isLoadingResults = true;
  // isRateLimitReached = false;

  Operation_Detail:OperationDetailDTO[] = []
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  showFiller = true;
  ngOnInit(): void {
    this.form =this.formBuilder.group({
    id:[0],
    product_id: [0, Validators.required],
    qty: [1,Validators.required],
    operation_type_id: [1, Validators.required],
    operationInOut_id: [0,Validators.required],
    itbis_included: [true,Validators.required],
    itbisAplied:[0.18,Validators.required],
    discount: [0.00,Validators.required],
    price: [0.00,Validators.required]
    ,producto:['']
  })
  }

  onSubmit(){
    this.Operation_Detail.push(this.form.value)
  }
  openListaInventario(){
    const dialogRef = this.dialog.open(ListaProducotoInventarioComponent,{
      width: '60%',
      data: { name: 'austin' }
    })
    
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result.id} + ${result.description}`);
      this.form.get('producto')?.patchValue(result.description)
    });
  }

  
}
