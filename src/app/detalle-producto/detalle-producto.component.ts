import { Component, inject, OnInit } from '@angular/core';
import { __param } from 'tslib';
import { CurrencyPipe } from '@angular/common';
import { Producto, Resultado } from '../interfaces/productos';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';


@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css',
})
export class DetalleProductoComponent implements OnInit  
{
  loading: boolean = true;
  product: Producto | undefined;


  private _route = inject(ActivatedRoute)
  private _productoService = inject(ProductosService)

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this._productoService.getProductoById(params['productosId']).subscribe((data: Resultado)=>{
        this.product = data.resultado[0];
        this.loading = false;
      })
    })
  }
}

