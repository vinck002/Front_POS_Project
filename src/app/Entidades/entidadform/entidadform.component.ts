import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntityCreationDto } from 'src/app/core/models/interfaces/Entidades/Entidad';

@Component({
  selector: 'app-entidadform',
  templateUrl: './entidadform.component.html',
  styleUrls: ['./entidadform.component.css']
})
export class EntidadformComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

@Input() modelo!:EntityCreationDto
@Input() Kind!:Number;


@Input() listadoErrores:String[] = [];
form!:FormGroup 

@Output() submit:EventEmitter<EntityCreationDto> = new EventEmitter<EntityCreationDto>();

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        identification:['',[Validators.required,Validators.pattern('[0-9]*')]],
        image:'',
        names:['',[Validators.required]],
        lastname:['',[Validators.required]],
        company:'',
        address1:'',
        address2:'',
        phone1:'',
        phone2:'',
        email:['',[Validators.email]],
        kind:this.Kind,
        notes:'',
        created_at: this.modelo? this.modelo.created_at: new Date().toISOString(),
        status : true
      });
      
          if(this.modelo !== undefined){  
        this.form.patchValue(this.modelo);
        }

  }


  onSubmit(){
    
    if(this.form.valid){
      this.submit.emit(this.form.value);
    }
}

}
