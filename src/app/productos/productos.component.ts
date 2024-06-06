import { Component, inject, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { Category, Productos } from '../interfaces/productos';
import { ProductosService } from '../services/productos.service';



@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {

  productos: Productos[]=[];

  private _productosService = inject(ProductosService);

  ngOnInit(): void {
    this._productosService.getProduct().subscribe((data: Productos[])=>{
      // console.log(data);
      this.productos = data;
    })
  }

}
