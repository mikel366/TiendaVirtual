import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../interfaces/productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlApi = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Productos[]>{
    return this.http.get<Productos[]>(this.urlApi);
  }

  getProductoById(id: number): Observable<any>{
    return this.http.get<Productos>(`${this.urlApi}/${id}`);
  }
}
