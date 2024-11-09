import { Producto } from './Producto.interface';

export interface Reporte {
  id?: string;
  fecha: Date;
  productos: Producto[];
}
