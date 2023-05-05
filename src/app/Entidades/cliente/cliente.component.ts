import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityCreationDto } from 'src/app/core/models/interfaces/Entidades/Entidad';
import { ClienteServiceService } from 'src/app/core/services/cliente-service.service';
import { parsearerrorAPI } from 'src/app/core/tools/utilidades';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private clienteService:ClienteServiceService
    ,private router:Router,private route:ActivatedRoute){ }

    entidad!:EntityCreationDto; 
    //declaracionde variables
  errores:String[] = [];
  Entidadkind:Number = 1;
  ID!:Number;
//******************** */
  ngOnInit(): void {
    //this.ID = Number(this.route.snapshot.paramMap.get('id') ?? 0);
      this.route.params.subscribe(
        params =>
        {
        
            this.ID = params['id'];
            if (this.ID)
            {
              this.clienteService.Edit(this.ID).subscribe(
              (entidad) => {this.entidad = entidad;
              });
            }
        }); 
  }
  btnDisabled: boolean = true;
  
  guardarCambios(cliente: EntityCreationDto){
    this.clienteService.crear(cliente).subscribe(
      {
        next:() =>{  
          this.router.navigate(['/entidades/cliente']);
        },
        error:(errors:any) =>{
          this.errores = parsearerrorAPI(errors);
        }
      }
    );

  }

}
