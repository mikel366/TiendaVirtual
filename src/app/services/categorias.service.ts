import { inject, Injectable } from '@angular/core';
import { ResultadoCategoria } from '../interfaces/categorias';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private urlApi = 'https://controlstock.com.ar/burns/api/categorias';

  private http = inject(HttpClient);

  getCategorias(): Observable<ResultadoCategoria> {
    return this.http.get<ResultadoCategoria>(this.urlApi);
  }

  getMarcasById(id: number): Observable<ResultadoCategoria> {
    return this.http.get<ResultadoCategoria>(
      `${this.urlApi}?linkTo=id_categoria&equalTo=${id}`
    );
  }

  getCategoriaByName(name: string) {
    return this.http.get(
      `${this.urlApi}?linkTo=nombre_categoria&equalTo=${name}`
    );
  }
}
