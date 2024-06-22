// export interface Productos {
//     id:          number;
//     title:       string;
//     price:       number;
//     description: string;
//     category:    Category;
//     image:       string;
//     rating:      Rating;
// }

// export enum Category {
//     Electronics = "electronics",
//     Jewelery = "jewelery",
//     MenSClothing = "men's clothing",
//     WomenSClothing = "women's clothing",
// }

// export interface Rating {
//     rate:  number;
//     count: number;
// }

export interface Resultado {
    estado:    number;
    total:     number;
    resultado: Producto[];
}

export interface Producto {
    id_producto:             number;
    nombre_producto:         string;
    descripcion_producto:    string;
    categoria_producto:      number;
    imagen_producto:         string;
    precio_producto:         number;
    cantidad_producto:       number;
    estado_producto:         number;
    marca_producto:          number;
    fecha_creacion_producto: Date;
    fecha_edicion_producto:  Date;
}