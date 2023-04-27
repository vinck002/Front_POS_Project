import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { sidebarOptionDto } from 'src/app/core/Dtos/SidebarOptionsDto';
import { SeguridadService } from 'src/app/core/seguridad/seguridad.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
@Output() sidenavClose = new EventEmitter();
  constructor(private SergService:SeguridadService) { }
rol:number = 1;
role:string = 'Admin';

//sidenavOptions: sidebarOptionDto[]=[]
  ngOnInit(): void {
    //console.log(this.SergService.obtenerRole());
  }
 
 public onsidenavClose = () =>{
  this.sidenavClose.emit();
 };
}
