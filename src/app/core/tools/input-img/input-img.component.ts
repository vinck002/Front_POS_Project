import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }

ImageBase64!:string;
@Input() urlImgActual!: string | null;
@Output() selectedFile: EventEmitter<File> =new EventEmitter<File>();
  ngOnInit(): void {
   // console.log(this.urlImgActual); //test
  }


  onChange(event:any): void {

  if (event.target.files.length > 0 ){
      const file:File = event.target.files[0]; 
  toBase64(file).then((value:string) =>{ this.ImageBase64 = value
  }).catch((err) => console.log(err))
  this.selectedFile.emit(file);
    this.urlImgActual = null
  }
  };
}
