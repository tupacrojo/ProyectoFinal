import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../../../interfaces/Producto.interface';
import { ProductoService } from '../../../services/producto.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajustar-stock',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './ajustar-stock.component.html',
  styleUrl: './ajustar-stock.component.css',
})
export class ListaProductosComponent implements OnInit {
  listaProductos: Producto[] = [];

  constructor(private productosService: ProductoService) {}

  ngOnInit(): void {
    this.mostrarLista();
  }

  mostrarLista() {
    this.productosService.getProductos().subscribe({
      next: (prod) => {
        this.listaProductos = prod;
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
        this.productosService.putProducto(produc).subscribe({
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

  eliminarProducto(id: number | undefined) {
    this.productosService.deleteProductos(id).subscribe({
      next: (produc: Producto) => {
        this.listaProductos = this.listaProductos.filter(
          (producto) => producto.id !== id
        );
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }

  campoOrden: keyof Producto | null = null;
  esAscendente: boolean = true;

  ordenarPor(campo: keyof Producto) {
    if (this.campoOrden === campo) {
      this.esAscendente = !this.esAscendente;
    } else {
      this.campoOrden = campo;
      this.esAscendente = true;
    }

    this.listaProductos.sort((a, b) => {
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
