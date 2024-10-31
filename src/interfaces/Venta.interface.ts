import { Producto } from "./Producto.interface"

export interface venta{
    id: string,
    fecha: string,
    total: number,
    productos: Producto[];
}

