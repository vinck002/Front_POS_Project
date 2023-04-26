import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/core/seguridad/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
     private seguridadService:SeguridadService,
     private router:Router) { }
    loading:boolean = false;
  form!:FormGroup;
  errores: string[]=[];
  ngOnInit(): void 
  {
    //console.log (localStorage.getItem('token'))
    this.loadformbuilder();
  }
  loadformbuilder(){
    this.form = this.formBuilder.group(
    {
      email:['',{validator:[Validators.required,Validators.email]}],
      password:['',{validator:[Validators.required]}]

    })
  }
  Onsubmit():void{
    this.loading = true;
    this.seguridadService.login(this.form.value).subscribe(
      res =>
      {
        this.seguridadService.guardarToken(res)
        this.loading = false;
        this.router.navigate(['/']);
      }
      ,err => {
        this.errores.push(err);
        console.error(err.error)}
    )

  }
  
  obtenerMensajeError(){
    var campo = this.form.get('email');
    if(campo?.hasError('required')){
      return 'El Campo Email es requerido'
    }  
    if(campo?.hasError('email')){
      return 'El Email no es valido'
    }  
    return '';
    }
    onKey(value: any) {
      if (this.errores.length > 0){
        console.log(value);
        this.errores =[];
      }
    }

}
