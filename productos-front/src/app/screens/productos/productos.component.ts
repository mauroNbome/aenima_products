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

  productos: ProductI[];

  ngOnInit(): void {
    this.productos = this.ProductosService.productos;
  }
}
