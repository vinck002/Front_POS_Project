import { Component, ElementRef, OnInit, Renderer2, ViewChild, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  MatDialog } from '@angular/material/dialog';

//import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
import { OperationDetailDTO, OperationInOutDTO, TipoComprobante } from 'src/app/core/models/interfaces/operacion';
import { ListaProducotoInventarioComponent } from '../dialog/lista-producoto-inventario/lista-producoto-inventario.component';
import {  Entity, Small_EntityInfoDTO } from 'src/app/core/models/interfaces/Entidades/Entidad';
import { Observable, map, startWith } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {  MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EntidadService } from 'src/app/core/services/entidad-service';
import { ListaProveedoresComponent } from '../dialog/lista-proveedores/lista-proveedores.component';
import { SeguridadService } from 'src/app/core/seguridad/seguridad.service';
//import { parsearFecha } from 'src/app/core/tools/utilidades';


@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  @ViewChild('code', { static: false, })
  RefFocusInput!: ElementRef;
  
  constructor(private formBuilder:FormBuilder
    ,public dialog: MatDialog
    ,public snackBar:MatSnackBar
    ,private renderer: Renderer2
    ,private EntidadService:EntidadService,
    private seguridadService : SeguridadService ) { }


//********************************************* */
//*****INFORMACION DEL HEADER DE OPERATIONS****************
//********************************************* */

    public form!:FormGroup
    public formOperation!:FormGroup

    itbis_included = true;
    // TipoComprobante = new FormControl<string | TipoComprobante>('');
    // proveedorControl = new FormControl<string | Small_EntityInfoDTO>('');
    
    Operation_Detail:OperationDetailDTO[] = []
    dataSource!: MatTableDataSource<OperationDetailDTO>;// this.Operation_Detail;
    //********************************************* */
    //********************************************* */ 
    discount=false;
    
    comprobantes =  [{id:1, names:'Entrada'},
                    {id:2, names:'Salida'}]
    
   Operation!:OperationInOutDTO;
  
   //SOperationInOut = signal<OperationInOutDTO>(this.Operation); 

  proveedor:Entity= {names:''} 
  documentNumber ='000000'; // signal<string>('00000');
  Sproveedor = signal<Entity>(this.proveedor);
  Tipo:number = 1;
  rnc:string ='';


  filteredComprobantes!: Observable<any[]>;
  filteredProveedores!: Observable<any[]>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['productName', 'qty', 'price','discount','itbisAplied','TotalLine', 'Acciones'];
  showFiller = true;
  
  ngOnInit(): void {
    this.initializeOperations();
    this.InitializeOperationDetail();
   
    this.dataSource = new MatTableDataSource<OperationDetailDTO>();

  // this.filteredComprobantes = this.TipoComprobante.valueChanges.pipe(
  //   startWith(''),
  //   map((value:any) => {
  //     const name = typeof value === 'string' ? value : value?.names;
  //     return name ? this._filter(name as string) : this.comprobantes.slice();
  //   }),
  // );

 
  }

//////////////////////////////////////////////////////////////////
//************************************************************** */

  initializeOperations():void{
    //REINICIAS ENTRADA CON NUEVA DATA
    this.Operation = {documentNumber:'000',box_id:1,AplicationDate: new Date,CurrencyTypeID:1,entidad_id:0,DocumentType:1
    ,operation_type_id:1,totalITBIS:0.00,cash:0.00,total:0.00,discount:0.00,OperationDetailDTO:this.Operation_Detail};
  }
  InitializeOperationDetail(){

    this.form =this.formBuilder.group({
      id:[0],
      barcode:['']
      ,product_id: [0, Validators.required],
      qty: [1],
      //operation_type_id: [1, Validators.required],
      itbisAplied:[0.00,Validators.required],
      discount: [0.00,Validators.required],
      price: [0.00,Validators.required]
      ,TotalLine: [0.00]
      ,productName:['']
    });
  }


  onSubmit(){
    this.Operation_Detail.push(this.form.value)
    console.log('se realizo submit');
  }
  //METODO PARA ABRIR EL INVENTARIO
  openListaInventario(){

    const dialogRef = this.dialog.open(ListaProducotoInventarioComponent,
      {
      width: '80%',
      data: { name: 'austin' }
      })
    
    dialogRef.afterClosed().subscribe((result:any) => {
      if(result){
        this.form.get('product_id')?.patchValue(result.id)
        this.form.get('productName')?.patchValue(result.description)
        this.form.get('price')?.patchValue(result.price)
     
        if(!result.discount){
        this.discount= true;
          //this.form.get('discount')?.patchValue((result.discount/1))
        }
        this.form.get('barcode')?.patchValue(result.barcode)
       //console.log(this.form.value)
      }
      
    });
  }

  OpenProveedor(){
    const dialogRef = this.dialog.open(ListaProveedoresComponent,{
      width: '80%',
      data: { name: 'proveedor ' }
    })
    
    dialogRef.afterClosed().subscribe( (result:Entity) => {
      if(result){
        this.Sproveedor.set(result)
        this.rnc = result.rnc??'';
        this.Operation.entidad_id=result.id??0;
      }
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
    this.Tipo = event.option.value.id;
    this.Operation.operation_type_id = event.option.value.id;
    console.log(this.Operation.operation_type_id )
     // this.form.get('entidad_id')?.setValue() ;
      
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
  setFocus() {
    this.renderer.selectRootElement(this.RefFocusInput.nativeElement).focus();
  }
  AddProduct(){
    if (typeof this.form.get('barcode')?.value === 'number' && !isNaN(this.form.get('barcode')?.value)) {return;}
    const codigo:string = this.form.get('barcode')?.value;
    //const indexAModificar: number = this.Operation_Detail.findIndex(item => item.barcode === codigo);
    const elementoAModificar: OperationDetailDTO | undefined = this.Operation_Detail.find(item => item.barcode === codigo);
    
    if (elementoAModificar) {
      // Modificar el elemento en el array
      const suma = parseInt(elementoAModificar.qty.toString()) + parseInt( this.form.get('qty')?.value);
      elementoAModificar.qty =suma;
      elementoAModificar.TotalLine = elementoAModificar.qty * elementoAModificar.price;
      //elementoAModificar.qty += parseInt( this.form.get('qty')?.value);
    } else{
      this.form.get('TotalLine')?.setValue((parseInt((this.form.get('qty')?.value??0).toString())) * (parseInt((this.form.get('price')?.value??0).toString()))) ;
      this.Operation_Detail.push(this.form.value);
    }

    this.dataSource.data =this.Operation_Detail;// this.Operation_Detail.slice();
    this.InitializeOperationDetail();
    this.setFocus();
  }

  onEnterKey(event:any) {
    // Verifica si la tecla presionada es "Enter" (código 13)
    if (event.keyCode === 13) {

      console.log('Tecla Enter presionada');
    }}

    DateChanged(event: any) {
     this.Operation.AplicationDate = event.value ;

    }

    GuardarOperacion(){
    this.Operation.documentNumber = this.documentNumber;
      this.Operation.DocumentType=2;
      this.Operation.rnc = this.Sproveedor().rnc??this.rnc;
      this.Operation.operation_type_id = this.Tipo;
      console.log(this.Operation)      
    }

}
