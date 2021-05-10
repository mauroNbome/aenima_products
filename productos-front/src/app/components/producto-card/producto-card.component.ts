import { Component, Input, OnInit } from '@angular/core';
import { ProductI } from '../../models/product';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.scss'],
})
export class ProductoCardComponent implements OnInit {
  @Input() producto: ProductI;

  urlBackend = 'http://127.0.0.1:5000';
  constructor(
    private ProductosService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getUrl(producto) {
    return `${this.urlBackend}${producto.image}`;
  }
}
