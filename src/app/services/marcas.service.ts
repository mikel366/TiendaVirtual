import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadoMarca } from '../interfaces/marcas';

@Injectable({
  providedIn: 'root',
})
export class MarcasService {
  private urlApi = 'https://controlstock.com.ar/burns/api/marcas';

  private http = inject(HttpClient);

  getMarcas(): Observable<ResultadoMarca> {
    return this.http.get<ResultadoMarca>(this.urlApi);
  }

  getMarcaById(id: number): Observable<ResultadoMarca> {
    return this.http.get<ResultadoMarca>(
      `${this.urlApi}?linkTo=id_marca&equalTo=${id}`
    );
  }

  getMarcatByName(name: string) {
    return this.http.get(
      `${this.urlApi}?linkTo=nombre_marca&equalTo=${name}`
    );
  }
}
