import { Component, inject, input, Input } from '@angular/core';
import { CommonModule, CurrencyPipe, SlicePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Producto } from '../interfaces/productos';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe, CommonModule, DetalleProductoComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  private _router = inject(Router);

  @Input() product!: Producto;


  verMas(id: number) {
    this._router.navigate(['/productos', id]);
  }

}
