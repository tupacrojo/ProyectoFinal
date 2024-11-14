import { Producto } from './Producto.interface';

export interface Venta {
  id: string;
  fecha: string;
  total: number;
  productos: Producto[];
}
