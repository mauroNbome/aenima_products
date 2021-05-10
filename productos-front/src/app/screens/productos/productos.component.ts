import { Component, OnInit } from '@angular/core';
import { ProductI } from '../../models/product';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  constructor(private ProductosService: ProductosService) {}

  productos: any;
  currentProducts: any;
  term = '';
  searchNotFound: boolean = false;
  searching: boolean = false;

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.ProductosService.getProductos().subscribe((res) => {
      console.log(res);
      this.productos = res;
      this.currentProducts = res;
    });
  }

  filterProducts() {
    if (this.term === '') {
      this.searching = false;
    } else {
      this.searching = true;
    }

    this.currentProducts = [];
    this.productos.forEach((el) => {
      if (el.name.toLowerCase().includes(this.term.toLowerCase())) {
        this.currentProducts.push(el);
      }
    });

    if (!this.currentProducts.length) {
      this.searchNotFound = true;
    } else {
      this.searchNotFound = false;
    }
  }

  resetProductos() {
    this.currentProducts = this.productos;
    this.searching = false;
    this.term = '';
  }
}
