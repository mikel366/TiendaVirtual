import { Component, inject, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { Producto, Resultado } from '../interfaces/productos';
import { ProductosService } from '../services/productos.service';
import { FormsModule } from '@angular/forms';
import { Marcas, ResultadoMarca } from '../interfaces/marcas';
import { MarcasService } from '../services/marcas.service';
import {  Categorias, ResultadoCategoria } from '../interfaces/categorias';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  loader: boolean = false;
  marcas: Marcas[] = [];
  categorias: Categorias[] = [];
  filteredData: Producto[] = [];
  searchData: string = '';
  selectedMarca: number | undefined;
  selectedCategoria: number | undefined;
  
  private _productosService = inject(ProductosService);
  private _marcasService = inject(MarcasService);
  private _categoriaService = inject(CategoriasService);

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllMarcas();
    this.getAllCategorias();
  }

  getAllProducts() {
    this.loader = true;
    this._productosService.getProducts().subscribe((res: Resultado) => {
      this.productos = res.resultado;
      this.filteredData = this.productos;
      this.loader = false;
    });
  }

  getAllMarcas(){
    this._marcasService.getMarcas().subscribe((res: ResultadoMarca)=>{
      this.marcas=res.resultado;
    });
  }

  getAllCategorias(){
    this._categoriaService.getCategorias().subscribe((res: ResultadoCategoria)=>{
      this.categorias=res.resultado;
    })
  }

  getFilteredProduct() {
    this.filteredData = this.productos.filter((producto: Producto) => {
      const matchesSearch = this.searchData 
        ? producto.nombre_producto.toLowerCase().includes(this.searchData.toLowerCase())
        : true;
      const matchesMarca = this.selectedMarca 
        ? producto.marca_producto === this.selectedMarca
        : true;
      const matchesCategoria = this.selectedCategoria 
        ? producto.categoria_producto === this.selectedCategoria
        : true;
      return matchesSearch && matchesMarca && matchesCategoria;
    });
  }
}
