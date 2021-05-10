import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductI } from '../../models/product';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.scss'],
})
export class ProductoEditComponent implements OnInit {
  formController: any;
  id: string | number;
  product: ProductI;
  uploadingFile: boolean = false;

  constructor(
    private fb: FormBuilder,
    private ProductosService: ProductosService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.crearFormulario();
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.getProduct();
  }

  guardar() {
    console.log(this.formController.value);
    this.updateProduct();
  }

  crearFormulario() {
    this.formController = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  getProduct() {
    this.ProductosService.getProductoById(this.id).subscribe((res) => {
      this.product = res;
      console.log(this.product);
      this.formController.reset(this.product);
    });
  }

  updateProduct() {
    this.ProductosService.updateProduct(
      this.id,
      this.formController.value
    ).subscribe((res) => {
      console.log(res);
      this.router.navigate(['gestion-productos']);
    });
  }

  async uploadFileHandler(e) {
    let file = e[0];

    console.log(file);
    let formData = new FormData();
    formData.append('image', file);

    // this.uploadingFile = true;

    this.ProductosService.uploadFile(formData).subscribe((res) => {
      console.log(res);
      this.formController.reset({
        name: this.formController.value.name,
        description: this.formController.value.description,
        image: res,
        price: this.formController.value.price,
      });
    });
  }
}
