import { Injectable } from '@angular/core';
import { ProductI } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  productos: ProductI[] = [
    {
      id: 1,
      nombre: 'Destornillador Philips',
      descripcion:
        'Destornillador más usado del mercado, concive 134134 demanda',
      imagen: '../../assets/testing-polling/20181307-carousel-894321502.jpg',
      precio: '400',
    },

    {
      id: 2,
      nombre: 'Destornillador Philips',
      descripcion:
        'Destornillador más usado del mercado, concive 134134 demanda',
      imagen:
        '../../assets/testing-polling/contact-tracing-on-college-campuses-820x440.jpg',
      precio: '4300',
    },

    {
      id: 3,
      nombre: 'Destornillador Philips',
      descripcion:
        'Destornillador más usado del mercado, concive 134134 demanda',
      imagen: '../../assets/testing-polling/literacy-student-outreach.jpg',
      precio: '700',
    },

    {
      id: 4,
      nombre: 'Destornillador Philips',
      descripcion:
        'Destornillador más usado del mercado, concive 134134 demanda',
      imagen: '../../assets/testing-polling/20181307-carousel-894321502.jpg',
      precio: '100',
    },
  ];

  constructor() {}
}
