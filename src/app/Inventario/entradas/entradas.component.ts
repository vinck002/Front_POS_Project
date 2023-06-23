import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
import { OperationDetailDTO } from 'src/app/core/models/interfaces/operacion';
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
    Producto:string ='';
    proveedorControl = new FormControl<string | Small_EntityInfoDTO>('');
    Operation_Detail:OperationDetailDTO[] = []

   //********************************************* */
   //********************************************* */ 

  options =  [{id:2, names:'Factura de Consumo'},
              {id:1, names:'Factura de Crédito Fiscal'},
              {id:3, names:'Notas de Débito'},
              {id:4, names:'Factura de Consumo'}]
  // Small_EntityInfoDTO[] =
  // [{id:1,identification: 351384, names:'Melivn',company:'DymProject',email:'vinc@gd',phone1:'8098683979',RNC:'654351351'},
  // {id:2,identification: 4341, names:'dian',company:'coco',email:'terr@gd',phone1:'226262565',RNC:'654351351'},
  // {id:3,identification: 98968, names:'roci',company:'palm',email:'teco@gd',phone1:'6516515',RNC:'654351351'}];

  filteredOptions!: Observable<any[]>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  showFiller = true;
  ngOnInit(): void {
   

    this.form =this.formBuilder.group({
    id:[],
    entidad_id:[1],
    product_id: [0, Validators.required],
    qty: [1,Validators.required],
    operation_type_id: [1, Validators.required],
    operationInOut_id: [0,Validators.required],
    itbis_included: [true,Validators.required],
    itbisAplied:[0.18,Validators.required],
    discount: [0.00,Validators.required],
    price: [0.00,Validators.required]
    ,producto:['']
  });

  this.filteredOptions = this.proveedorControl.valueChanges.pipe(
    startWith(''),
    map((value:any) => {
      const name = typeof value === 'string' ? value : value?.names;
      return name ? this._filter(name as string) : this.options.slice();
    }),
  );
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

  displayFn(user: Small_EntityInfoDTO): string {
    return user && user.names ? user.names : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.names.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event: any) {
    
      this.form.get('entidad_id')?.setValue(event.option.value.id) ;
      console.log(this.form.value);
    
  }
}
