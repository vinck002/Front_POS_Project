import { Component, ContentChild, EventEmitter, OnInit, Output } from '@angular/core';
import { SeguridadService } from 'src/app/core/seguridad/seguridad.service';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() public sidenavToggle = new EventEmitter();
  constructor(public segridadServ:SeguridadService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  salir(){
    this.openDialog('100ms', '100ms');
    //this.segridadServ.logout();
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
   let dialogref = this.dialog.open(DialogContentComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{name: "Cerrar Sesion", Message:"Seguro que desea cerrar la sesion"}
      });
    dialogref.afterClosed().subscribe(
      x => {
      if(x === 'true')
      this.segridadServ.logout();
      }
    )
  }

  onToggleSidenav = () => {
    this.sidenavToggle.emit(); 
  }
}
