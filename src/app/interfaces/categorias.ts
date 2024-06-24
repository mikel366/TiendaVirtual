export interface ResultadoCategoria {
    estado:    number;
    total:     number;
    resultado: Categorias[];
}

export interface Categorias {
    id_categoria:     number;
    nombre_categoria: string;
    fecha_creacion:   Date;
}