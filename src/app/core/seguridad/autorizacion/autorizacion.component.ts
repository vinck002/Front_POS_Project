import { Component, Input, OnInit } from '@angular/core';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-autorizacion',
  templateUrl: './autorizacion.component.html',
  styleUrls: ['./autorizacion.component.css']
})
export class AutorizacionComponent implements OnInit {

  constructor(private seguridadService:SeguridadService) { }

  @Input()rol!:string;

  ngOnInit(): void {
  
  }
  estaLogeado():boolean{
    return this.seguridadService.logeado();
  }

}
