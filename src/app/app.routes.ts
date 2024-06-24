import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ContactoComponent } from './contacto/contacto.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'productos/:productosId', component: DetalleProductoComponent},
    {path: 'contacto', component: ContactoComponent},
    { path: '**', redirectTo:''},
];
