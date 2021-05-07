import { Component, Input, OnInit } from '@angular/core';
import { ProductI } from '../../models/product';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  @Input() producto: ProductI;
  constructor(private ProductosService: ProductosService) {}

  ngOnInit(): void {}
}
