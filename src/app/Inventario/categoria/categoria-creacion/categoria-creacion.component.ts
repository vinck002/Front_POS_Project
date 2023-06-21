import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { categoryCreacionDTO, categoryDTO } from 'src/app/core/models/interfaces/category';
import { CategoryService } from 'src/app/core/services/category/category.service';

@Component({
  selector: 'app-categoria-creacion',
  templateUrl: './categoria-creacion.component.html',
  styleUrls: ['./categoria-creacion.component.css']
})
export class CategoriaCreacionComponent implements OnInit {

  constructor(private categoryService:CategoryService,private router:Router,private route:ActivatedRoute,private formBuilder:FormBuilder) { }

  listadoErrores:String[] = [];
  category!:categoryDTO; //= {description: '',name: '',image:'/assets/img/img.jpg'}
  form!:FormGroup
  ID!:number
  selectedFile!:File
  urlDefaultImg = '/assets/img/img.jpg';
renderizar:boolean = false
ImgCambiada:boolean = false;
  ngOnInit(): void {
     
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      image: [''],
      description: ['', Validators.required]
    });
    if(this.category){
      this.form.patchValue(this.category)
    }
    
    this.route.params.subscribe(
      params =>
      {

          this.ID = params['id'];
          if (this.ID)
          {
            this.categoryService.getById(this.ID).subscribe(
            (response) => {
              this.category = response;
              this.form.patchValue(this.category)
             
            }),() => this.router.navigate(['/categorias']);
          }
          this.renderizar = true;
      }); 
    
  }
  onSubmit(): void {

    
    if(this.ID){
      this.categoryService.updateWithFile(this.ID,this.form.value).subscribe(
      (response) => {this.router.navigate(['/inventario/categorias']);
     });
    }else
    {
        this.categoryService.createWithFile(this.form.value).subscribe(
      () => {this.router.navigate(['/inventario/categorias']);
      });  }
  }


  SelectedFile(file:File){
    this.ImgCambiada = true;
    this.form.get('image')?.setValue(file)
  }
}
