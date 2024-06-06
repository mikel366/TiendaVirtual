import { Component, inject, Input } from '@angular/core';
import { Productos } from '../interfaces/productos';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  private _router = inject(Router)
  
  @Input() producto?: Productos;

  verMas(id?: number)
  {
    this._router.navigate(['/productos', id]);
  }
}
