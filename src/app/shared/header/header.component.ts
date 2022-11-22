import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SeguridadService } from 'src/app/core/seguridad/seguridad.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() public sidenavToggle = new EventEmitter();
  constructor(public segridadServ:SeguridadService) { }

  ngOnInit(): void {
  }

  salir(){
    console.log('sss')
    this.segridadServ.logout();
  }
  onToggleSidenav = () => {
    this.sidenavToggle.emit(); 
  }
}
