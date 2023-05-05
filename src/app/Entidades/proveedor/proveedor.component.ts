import { Component, OnInit } from '@angular/core';
import { EntityCreationDto } from 'src/app/core/models/interfaces/Entidades/Entidad';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  constructor() { }
Entidadkind:Number = 2;
  ngOnInit(): void {
  }
  btnDisabled: boolean = true;
  
  RecivirData(Datos: EntityCreationDto){
    console.log(Datos);
  }
}
