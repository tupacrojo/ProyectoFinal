export interface Producto {
  id?: number;
  nombre: string;
  precio: number | null;
  categoria: string;
  cantidad: number | null;
  diferencia: number;
}
