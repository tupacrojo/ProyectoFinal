import { Producto } from './Producto.interface';

export interface Reporte {
  id: null | string | number;
  fecha: Date;
  productos: Producto[];
}
