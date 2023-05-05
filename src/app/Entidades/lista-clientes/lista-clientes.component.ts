import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Entity } from 'src/app/core/models/interfaces/Entidades/Entidad';
import { ClienteServiceService } from 'src/app/core/services/cliente-service.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(private clienteService:ClienteServiceService) { }
  //DECLARATIONS VARIABLES AND @INPUTS
Clientes:Entity[] = [];
dataSource = new MatTableDataSource<Entity>;
@ViewChild(MatSort, { static: true }) sort!: MatSort;
@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns:string[] = ['identification','name','lastname','company'
  ,'email1','status','Accion']
//****************** */

  ngOnInit(): void {
    this.loadData();
  }
  private loadData(){
    this.clienteService.obtenerTodos().subscribe(
      (datos:Entity[]) =>{
  
          this.Clientes = datos;

          if(this.Clientes.length > 0){
            //this.form.patchValue(this.lstUsers);
            this.dataSource = new MatTableDataSource<Entity>(this.Clientes)
            this.dataSource.sort = this.sort;
            this.paginator.pageSize = 10;
            this.dataSource.paginator = this.paginator;
          }
        }
    )
  }

  OnEdit(id:number):void{
    const user = this.Clientes.filter(x => x.id === id)[0]
    console.log(user);  //console.log(user);
  }
  DeleteEntidad(id:number){
    console.log(id); 
    //this.clienteService.Delete(id);
    this.loadData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
