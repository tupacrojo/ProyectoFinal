import { Producto } from './Producto.interface';
import { Usuario } from './Usuario.interface';

export interface Venta {
  id: string;
  fecha: string;
  total: number;
  vendedor: string;
  productos: Producto[];
}
