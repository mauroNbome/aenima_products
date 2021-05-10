import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ProductI } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  getProductos(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .get<any>(`${environment.urlBase}api/products`, httpOptions)
      .pipe(
        map((resp) => {
          return resp;
        })
      );
  }

  getProductoById(id): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .get<any>(`${environment.urlBase}api/products/${id}`, httpOptions)
      .pipe(
        map((resp) => {
          return resp;
        })
      );
  }

  updateProduct(id, product: ProductI): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .put<any>(
        `${environment.urlBase}api/products/${id}`,
        product,
        httpOptions
      )
      .pipe(
        map((resp) => {
          return resp;
        })
      );
  }

  deleteProduct(id): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .delete<any>(`${environment.urlBase}api/products/${id}`, httpOptions)
      .pipe(
        map((resp) => {
          return resp;
        })
      );
  }

  createProduct(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<any>(`${environment.urlBase}api/products/`, httpOptions)
      .pipe(
        map((resp) => {
          return resp;
        })
      );
  }

  uploadFile(file): any {
    const httpOptions = {
      headers: new HttpHeaders({}),
    };
    return this.http
      .post<any>(`${environment.urlBase}api/upload/`, file, {
        responseType: 'text' as 'json',
      })
      .pipe(
        map((resp) => {
          console.log(resp);
          return resp;
        })
      );
  }
}
