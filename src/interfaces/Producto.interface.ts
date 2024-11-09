export interface Producto {
  id: string;
  nombre: string;
  precio: number | null;
  categoria: string;
  cantidad: number | null;
  diferencia: number;
}
