import { CurrencyPipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { category, categoryDTO, productCategory } from 'src/app/core/models/interfaces/category';
import { UnitType, productDTO } from 'src/app/core/models/interfaces/product';
import { ProductService } from 'src/app/core/services/Producto/productoService';
import { CategoryService } from 'src/app/core/services/category/category.service';

@Component({
  selector: 'app-productos-creacion',
  templateUrl: './productos-creacion.component.html',
  styleUrls: ['./productos-creacion.component.css']
})
export class ProductosCreacionComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
    ,private currencyPipe:CurrencyPipe
    ,private categoryService:CategoryService) { }

  selected = new FormControl(1, [Validators.required, Validators.pattern('valid')]);

  listadoErrores:String[] = [];
  product!:productDTO; //= {description: '',name: '',image:'/assets/img/img.jpg'}
  form!:FormGroup
  ID!:number
  selectedFile!:File
  urlDefaultImg = '/assets/img/img.jpg';
  unitType:UnitType[] = []
renderizar:boolean = false
ImgCambiada:boolean = false;
lstCategories!:productCategory[]


ngOnInit(): void {
    this.productService.getUnitType().subscribe(data => this.unitType = data)
    this.categoryService.getAll(1,100).subscribe(
      (data: HttpResponse<productDTO[]>) =>{
        const arrayvalues = Object.values(data.body??[]);
      //   console.log(data)
      const result = arrayvalues.map((prod) => {
        const product: productCategory = { id: prod.id, name: prod.name}
        return product;
      });
        this.lstCategories = result;
        }
      );

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      image: [''],
      barcode: [''],
      description: [''],
      inventary_min: [1, Validators.required],
      price_in: [0.00],
      price_out: [0.00],
      unitID: [1],
      categoryId: [1],
      is_active:true,
      updated_at: [new Date()],
    });
     

  
      this.route.params.subscribe(
        params =>
        {
  
            this.ID = params['id'];
            if (this.ID)
            {
              this.productService.getById(this.ID).subscribe(
              (response) => {
                this.product = response;
                this.form.patchValue(this.product)
                this.renderizar = true;
              }),() => this.router.navigate(['/productos/']);
            }else {
              this.renderizar = true;
            }
        }); 
      
    
    if(this.product){
      this.form.patchValue(this.product)
    }
    
    
  }
  onSubmit(): void {

    this.renderizar = false;
    if(this.ID){
      this.productService.updateWithFile(this.ID,this.form.value).subscribe(
      (response) => {this.router.navigate(['/inventario/productos']);
      
     });
    }else
    {
        this.productService.createWithFile(this.form.value).subscribe(
      () => {this.router.navigate(['/inventario/productos']);
      });  }
  }


  SelectedFile(file:File){
    this.ImgCambiada = true;
    this.form.get('image')?.setValue(file)
  }

}

