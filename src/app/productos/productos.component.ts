import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {

}
