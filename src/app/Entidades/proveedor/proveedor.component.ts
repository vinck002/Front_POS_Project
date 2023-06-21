import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityCreationDto } from 'src/app/core/models/interfaces/Entidades/Entidad';
import { EntidadService } from 'src/app/core/services/entidad-service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  constructor(private clienteService:EntidadService
    ,private router:Router,private route:ActivatedRoute){ }
    //declaracionde variables
    entidad!:EntityCreationDto; 
    EndpointApi= 'Proveedor'
  errores:String[] = [];
  Entidadkind:Number = 2;
  ID!:Number;
//******************** */
  ngOnInit(): void {
    //console.log(this.route.pathFromRoot);
      this.route.params.subscribe(
        params =>
        {
            this.ID = params['id'];
            if (this.ID)
            {
              this.clienteService.FindByID(this.EndpointApi,this.ID).subscribe(
              (response) => {this.entidad = response;
              });
            }
        }); 
  }
  btnDisabled: boolean = true;
  
  guardarCambios(cliente: EntityCreationDto){
    this.clienteService.Save(this.EndpointApi,cliente,this.ID)//.pipe(catchError((obj)=> obj.error))
    .subscribe(
      {
      next:() =>{  
         
        this.router.navigate(['/entidades/proveedor']);
        }
        ,
        error:(errors:any) =>{
          //this.errores = parsearerrorAPI(errors);
          console.log(errors);
        }
      }
    );

  }

}
