import { Component, inject, OnInit } from '@angular/core';
import { VentaService } from '../../../services/venta.service';
import { Producto } from '../../../interfaces/Producto.interface';
import { ProductoService } from '../../../services/producto.service';
import { CommonModule } from '@angular/common';
import { venta } from '../../../interfaces/Venta.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nueva-venta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nueva-venta.component.html',
  styleUrl: './nueva-venta.component.css',
})
export class NuevaVentaComponent implements OnInit {
  ngOnInit(): void {
    this.getListaProductos();
  }

  listaProductos: Producto[] = [];
  listaProductosVenta: number[] = [];

  venta: venta = {
    fecha: Date.now().toString(),
    total: 0,
    productos: [],
  };

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

  cargarVenta() {
    console.log(this.venta);
    ///TODO enviar venta y reducir stock
  }
}
