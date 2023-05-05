import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-motrar-errores',
  templateUrl: './motrar-errores.component.html',
  styleUrls: ['./motrar-errores.component.css']
})
export class MotrarErroresComponent implements OnInit {

  constructor() { }
  
@Input() errores: String[] = [];

  ngOnInit(): void {
  }

}
