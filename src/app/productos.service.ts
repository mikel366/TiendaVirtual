import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from './productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlApi = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) { }

  retornar()
  {
    return this.http.get<Productos[]>(this.urlApi);
  }
}
