import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { __param } from 'tslib';
import { Productos } from '../interfaces/productos';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit {

  loading: boolean = true;
  public producto?: Productos;

  private _route = inject(ActivatedRoute);
  private _productoService = inject(ProductosService);

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this._productoService.getProductoById(params['productosId']).subscribe((data: Productos) =>{
        console.log(params['productosId'])
        console.log(data);
       this.producto = data;
        this.loading = false;
    });
  })
}

}
