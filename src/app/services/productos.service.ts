import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {  Resultado } from '../interfaces/productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlApi = 'https://controlstock.com.ar/burns/api/productos';

  private http = inject(HttpClient)


  getProducts(): Observable<Resultado>{
    return this.http.get<Resultado>(this.urlApi);
  }

  getProductoById(id: number): Observable<Resultado>{
    return this.http.get<Resultado>(`${this.urlApi}?linkTo=id_producto&equalTo=${id}`);
  }

  getProductByName(name: string)
  {
    return this.http.get(`${this.urlApi}?linkTo=nombre_producto&equalTo=${name}`)
  }
}
