import { Component, Input } from '@angular/core';
import { Productos } from '../productos';
import { ProductosService } from '../productos.service';
import { CurrencyPipe, NgFor } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  productos: Productos[] = [];

  constructor( private productosService: ProductosService)
  {
    this.recuperar();
  }

  recuperar()
  {
    this.productosService.retornar().subscribe((productos: Productos[])=>{
      this.productos = productos;
    });
  }

  

}
