import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/core/services/Entidades/usuario.service';
import { role, user } from 'src/app/core/models/interfaces/Entidades/Entidad';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
role:role[] = [
  {id:"User",description:'usuario'}
  ,{id:"Supervisor",description:'Supervisor'}
  ,{id:"Admin",description:'Administrador'}
]
  constructor(private formBuilder:FormBuilder,private UserServices:UsuarioService) { }
  dataSource = new MatTableDataSource<user>;
  form!: FormGroup;
  lstUsers: user[]=[]
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
 ngOnInit(): void {
   this.initialFormGroup();
   this.loadData();

}

loadData(){
  this.UserServices.getUsuarios().subscribe({
    next:(values) =>{
      this.lstUsers = values;
      //console.log(this.lstUsers);
      if(this.lstUsers.length > 0){
        //this.form.patchValue(this.lstUsers);
        this.dataSource = new MatTableDataSource<user>(this.lstUsers)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    }
    ,error: (err) => console.log(err)
})
}

initialFormGroup(){
  this.form = this.formBuilder.group(
    {
     userName:['',Validators.required ]
    ,email:['']
    ,password:['',Validators.required ]
    ,role:[Validators.required]
    }); 
}

  displayedColumns:string[] = ['userName','email','role','Accion']
  public onNewClick(): void {
    this.initialFormGroup();
      // this.form.reset();
    }

  onSubmit(){
   // console.log(this.form.value)
    this.UserServices.SaveUsuario(this.form.value)
    .subscribe({next:()=>
    {
      this.loadData();
    },error:(error) => console.error(error)
  });
  
  }

  OnEdit(_username:string):void{
    const user = this.lstUsers.filter(x => x.userName === _username)[0]
    this.form.patchValue(user);
    //console.log()
  }
  DeleteEntidad(_username:string){
    this.UserServices.DeactiveUsuario(_username);
    this.loadData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
