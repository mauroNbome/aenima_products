import { Component, OnInit } from '@angular/core';
import { ProductI } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto-view',
  templateUrl: './producto-view.component.html',
  styleUrls: ['./producto-view.component.scss'],
})
export class ProductoViewComponent implements OnInit {
  product: ProductI;
  id: number | string;

  urlBackend = 'http://127.0.0.1:5000';

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private ProductosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.getProduct();
  }

  getProduct() {
    this.ProductosService.getProductoById(this.id).subscribe((res) => {
      console.log(res);
      this.product = res;
    });
  }

  getUrl(producto) {
    return `${this.urlBackend}${producto.image}`;
  }
}
