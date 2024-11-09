import { Producto } from './Producto.interface';

export interface Pedido {
  id?: string;
  fecha: string;
  estado: string;
  productos: Producto[];
}
