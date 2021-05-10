import { Component, OnInit } from '@angular/core';
import { ProductI } from '../../models/product';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.scss'],
})
export class GestionProductosComponent implements OnInit {
  productos: ProductI[];
  beingDeleted: boolean = false;

  constructor(
    private ProductosService: ProductosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.ProductosService.getProductos().subscribe((res) => {
      console.log(res);
      this.productos = res;
    });
  }

  deleteProduct(id) {
    if (window.confirm('Are you sure?')) {
      this.beingDeleted = true;
      this.ProductosService.deleteProduct(id).subscribe((res) => {
        console.log(res);
        console.log(`${id} deleted`);
        this.beingDeleted = false;
        this.getProductos();
      });
    }
  }

  createProduct() {
    this.ProductosService.createProduct().subscribe((res) => {
      this.router.navigate(['producto-edit', res._id]);
    });
  }
}
