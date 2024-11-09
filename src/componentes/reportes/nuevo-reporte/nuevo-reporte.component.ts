import { Component } from '@angular/core';
import { Producto } from '../../../interfaces/Producto.interface';
import { ProductoService } from '../../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-reporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nuevo-reporte.component.html',
  styleUrl: './nuevo-reporte.component.css',
})
export class NuevoReporteComponent {
  productos: Producto[] = [];
  constructor(private productosService: ProductoService) {}

  ngOnInit(): void {
    this.mostrarLista();
  }

  mostrarLista() {
    this.productosService.getProductos().subscribe({
      next: (prod) => {
        this.productos = prod;
      },

      error: (err) => {
        console.log('Error', err);
      },
    });
  }

  setSubtotal(id: number, cantidad: string | null) {
    this.productosService.getProductoById(id).subscribe({
      next: (produc: Producto) => {
        produc.diferencia = -(produc.cantidad == null
          ? 0
          : produc.cantidad - (Number(cantidad) ?? 0));
        this.productosService.putProducto(id, produc).subscribe({
          next: (produc: Producto) => {
            this.mostrarLista();
          },
          error: (err) => {
            console.log('Error', err);
          },
        });
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }

  enviarDatos() {}

  campoOrden: keyof Producto | null = null;
  esAscendente: boolean = true;
  ordenarPor(campo: keyof Producto) {
    if (this.campoOrden === campo) {
      this.esAscendente = !this.esAscendente;
    } else {
      this.campoOrden = campo;
      this.esAscendente = true;
    }

    this.productos.sort((a, b) => {
      const valorA = a[campo];
      const valorB = b[campo];

      if (valorA === null || valorA === undefined)
        return this.esAscendente ? 1 : -1;
      if (valorB === null || valorB === undefined)
        return this.esAscendente ? -1 : 1;

      if (valorA < valorB) return this.esAscendente ? -1 : 1;
      if (valorA > valorB) return this.esAscendente ? 1 : -1;
      return 0;
    });
  }
}
