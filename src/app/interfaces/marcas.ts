export interface ResultadoMarca {
    estado:    number;
    total:     number;
    resultado: Marcas[];
}

export interface Marcas {
    id_marca:       number;
    nombre_marca:   string;
    fecha_creacion: Date;
}