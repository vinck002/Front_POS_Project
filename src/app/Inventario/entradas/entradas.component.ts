import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
import { OperationDetailDTO, TipoComprobante } from 'src/app/core/models/interfaces/operacion';
import { ListaProducotoInventarioComponent } from '../dialog/lista-producoto-inventario/lista-producoto-inventario.component';
import {  Small_EntityInfoDTO } from 'src/app/core/models/interfaces/Entidades/Entidad';
import { Observable, map, startWith } from 'rxjs';


@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  
  
  constructor(private formBuilder:FormBuilder
    ,public dialog: MatDialog
    ,public snackBar:MatSnackBar) { }


//********************************************* */
//*****INFORMACION DEL HEADER DE OPERATIONS****************
//********************************************* */

    public form!:FormGroup
    itbis_included = true;
    TipoComprobante = new FormControl<string | TipoComprobante>('');
    proveedorControl = new FormControl<string | Small_EntityInfoDTO>('');
    Operation_Detail:OperationDetailDTO[] = []

   //********************************************* */
   //********************************************* */ 

  comprobantes =  [{id:2, names:'Factura de Consumo'},
              {id:1, names:'Factura de Crédito Fiscal'},
              {id:3, names:'Notas de Débito'},
              {id:4, names:'Factura de Consumo'}]

  proveedores = [{id:2, names:'proveedor 1'},
  {id:1, names:'proveedor 2'},
  {id:3, names:'proveedor 3'},
  {id:4, names:'proveedor 4'}]
  // Small_EntityInfoDTO[] =
  // [{id:1,identification: 351384, names:'Melivn',company:'DymProject',email:'vinc@gd',phone1:'8098683979',RNC:'654351351'},
  // {id:2,identification: 4341, names:'dian',company:'coco',email:'terr@gd',phone1:'226262565',RNC:'654351351'},
  // {id:3,identification: 98968, names:'roci',company:'palm',email:'teco@gd',phone1:'6516515',RNC:'654351351'}];

  filteredComprobantes!: Observable<any[]>;
  filteredProveedores!: Observable<any[]>;
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  showFiller = true;
  ngOnInit(): void {
   

    this.form =this.formBuilder.group({
    id:[],
    entidad_id:[1],
    product_id: [0, Validators.required],
    documento: ['',Validators.required],
    qty: [1,Validators.required],
    operation_type_id: [1, Validators.required],
    operationInOut_id: [0,Validators.required],
    ITBIS:[0.00,Validators.required],
    discount: [0.00,Validators.required],
    price: [0.00,Validators.required]
    ,producto:['']
  });

  this.filteredComprobantes = this.TipoComprobante.valueChanges.pipe(
    startWith(''),
    map((value:any) => {
      const name = typeof value === 'string' ? value : value?.names;
      return name ? this._filter(name as string) : this.comprobantes.slice();
    }),
  );


  this.filteredProveedores = this.proveedorControl.valueChanges.pipe(
    startWith(''),
    map((value:any) => {
      const name = typeof value === 'string' ? value : value?.names;
      return name ? this._filter(name as string) : this.proveedores.slice();
    }),
  );
  }

  onSubmit(){
    this.Operation_Detail.push(this.form.value)
    
  }
  //METODO PARA ABRIR EL INVENTARIO
  openListaInventario(){
    const dialogRef = this.dialog.open(ListaProducotoInventarioComponent,{
      width: '60%',
      data: { name: 'austin' }
    })
    
    dialogRef.afterClosed().subscribe((result:any) => {
      this.form.get('product_id')?.patchValue(result.id)
      this.form.get('producto')?.patchValue(result.description)
      console.log(this.form.value)
    });
  }

  displayFn(user: Small_EntityInfoDTO): string {
    return user && user.names ? user.names : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.comprobantes.filter(option => option.names.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event: any) {
      this.form.get('entidad_id')?.setValue(event.option.value.id) ;
      console.log(this.form.value);
  }

//APLICAR EL ITBIS
  onCheckboxChange(event:any){
    if (event.checked && parseInt(this.form.get('product_id')?.value,10) > 0 ) {
      this.form.get('ITBIS')?.setValue(0.18);  // this.form.get('product_id')?.value  nota : modificar
   
      console.log('El checkbox ha sido marcado.');
    } else {
      console.log('El checkbox ha sido desmarcado.');
    }
  }
}
