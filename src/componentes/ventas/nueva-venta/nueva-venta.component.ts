import { Component, inject, OnInit } from '@angular/core';
import { VentaService } from '../../../services/venta.service';
import { Producto } from '../../../interfaces/Producto.interface';
import { ProductoService } from '../../../services/producto.service';
import { CommonModule } from '@angular/common';
import { Venta } from '../../../interfaces/Venta.interface';
import { RouterModule } from '@angular/router';
import * as uuid from 'uuid';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-nueva-venta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nueva-venta.component.html',
  styleUrl: './nueva-venta.component.css',
})
export class NuevaVentaComponent implements OnInit {
  ngOnInit(): void {
    this.getListaProductos();
  }

  listaProductos: Producto[] = [];
  listaProductosVenta: number[] = [];

  auth = inject(AuthService);
  setThisVenta(): Venta {
    return {
      id: uuid.v4(),
      fecha: new Date().toLocaleDateString('es-ES'),
      total: 0,
      productos: [],
      vendedor: this.auth.getUserName() || '',
    };
  }
  venta: Venta = this.setThisVenta();
  pt = inject(ProductoService);
  vt = inject(VentaService);

  getListaProductos() {
    this.pt.getProductos().subscribe({
      next: (prod) => {
        this.listaProductos = prod;
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }

  sumar(p: Producto, i: number) {
    if ((p.cantidad ? p.cantidad : 0) > (this.listaProductosVenta[i] | 0)) {
      if (!this.listaProductosVenta[i]) {
        this.listaProductosVenta[i] = 1;
      } else {
        this.listaProductosVenta[i]++;
      }
    }
    this.venta.productos[i] = { ...this.listaProductos[i] };
    this.venta.productos[i].cantidad = this.listaProductosVenta[i];
  }

  restar(p: Producto, i: number) {
    if (this.listaProductosVenta[i] > 0) {
      this.listaProductosVenta[i]--;
      this.venta.productos[i] = { ...this.listaProductos[i] };
      this.venta.productos[i].cantidad = this.listaProductosVenta[i];
    }
  }

  calcularTotal() {
    this.venta.total = 0;
    this.venta.productos.forEach((p) => {
      this.venta.total += p.precio * p.cantidad;
    });
  }

  cargarVenta() {
    this.calcularTotal();
    this.venta.productos = this.listaProductos
      .map((producto, index) => {
        return {
          ...producto,
          cantidad: this.listaProductosVenta[index] || 0,
        };
      })
      .filter((producto) => producto.cantidad > 0);
    if (this.venta.productos.length === 0) {
      console.log('No hay productos para vender');
      return;
    }

    this.vt.postVenta(this.venta).subscribe({
      next: (ven) => {
        this.venta.productos.forEach((productoVenta) => {
          this.pt.getProductoById(productoVenta.id).subscribe({
            next: (producto) => {
              producto.cantidad -= productoVenta.cantidad;
              this.pt.putProducto(producto).subscribe({
                next: (updatedProducto) => {
                  this.listaProductosVenta = [];
                  this.venta = this.setThisVenta();
                  this.getListaProductos();
                },
                error: (err) => {
                  console.log('Error al actualizar stock', err);
                },
              });
            },
            error: (err) => {
              console.log('Error al obtener producto', err);
            },
          });
        });
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }
}
