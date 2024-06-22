import { Component, inject, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { Producto, Resultado } from '../interfaces/productos';
import { ProductosService } from '../services/productos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  loader: boolean = false;
  private _productosService = inject(ProductosService);
  filteredData: Producto[] = [];
  searchData: string = '';

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._productosService.getProducts().subscribe((res: Resultado) => {
      this.productos = res.resultado;
      this.filteredData = this.productos;
      this.loader = false;
    });
  }
  getFilteredProduct() {
    if (this.searchData) {
      this.filteredData = this.productos.filter((producto: Producto) =>
        producto.nombre_producto
          .toLowerCase()
          .includes(this.searchData.toLowerCase())
      );
    } else {
      this.filteredData = this.productos;
    }
  }
}
