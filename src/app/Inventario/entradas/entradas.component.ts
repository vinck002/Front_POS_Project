import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OperationDetailDTO } from 'src/app/core/models/interfaces/operacion';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  public form!:FormGroup
   
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
  })
  }

  onSubmit(){
    this.Operation_Detail.push(this.form.value)
  }
  
}
