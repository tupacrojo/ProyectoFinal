import { Component, inject, OnInit } from '@angular/core';
import { Producto } from '../../../interfaces/Producto.interface';
import { ProductoService } from '../../../services/producto.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-filtrar-productos',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './filtrar-productos.component.html',
  styleUrl: './filtrar-productos.component.css',
})
export class FiltrarProductosComponent implements OnInit {
  listaProductos: Producto[] = [];
  listaFiltradaProductos: Producto[] = [];
  listaCategorias: string[] = [];
  fb = inject(FormBuilder);

  filtroForm = this.fb.nonNullable.group({
    categoria: [''],
  });

  constructor(private productosService: ProductoService) {}

  ngOnInit(): void {
    this.mostrarLista();
  }

  mostrarLista() {
    this.productosService.getProductos().subscribe({
      next: (prod) => {
        this.listaProductos = prod;
        this.listaFiltradaProductos = prod;
        this.extraerCategorias();
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

        this.listaFiltradaProductos = this.listaFiltradaProductos.filter(
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

  extraerCategorias() {
    this.listaCategorias = Array.from(
      new Set(this.listaProductos.map((producto) => producto.categoria))
    );
  }

  filtrarPorCategoria() {
    const categoriaSeleccionada = this.filtroForm.get('categoria')?.value;
    if (categoriaSeleccionada) {
      this.listaFiltradaProductos = this.listaProductos.filter(
        (producto) => producto.categoria === categoriaSeleccionada
      );
    } else {
      this.listaFiltradaProductos = [...this.listaProductos];
    }
  }
}
