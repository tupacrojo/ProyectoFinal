import {
  Component,
  inject,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Pedido } from '../../../interfaces/Pedido.interface';
import { PedidoService } from '../../../services/pedido.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-cargar-remito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cargar-remito.component.html',
  styleUrl: './cargar-remito.component.css',
})
export class CargarRemitoComponent implements OnInit {
  constructor(
    private productoService: ProductoService,
    private ts: PedidoService
  ) {}
  @ViewChild('inputRecibido') inputRecibido!: ElementRef;

  ngOnInit(): void {
    this.listarPedidosAceptados();
  }

  listaPedidosAceptados: Pedido[] = [];
  nuevaCantidad: number = 0;

  listarPedidosAceptados() {
    this.ts.getPedidosAceptados().subscribe({
      next: (pedidos) => {
        this.listaPedidosAceptados = pedidos;
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }

  setRecibido(pedido: Pedido, id: number | undefined, value: string) {
    pedido.productos.find((producto) => producto.id === id)!.cantidad =
      Number(value);
  }

  cargarProducto(pedido: Pedido) {
    console.log(pedido);
    pedido.productos.forEach((produ) => {
      if (produ.id) {
        this.productoService.getProductoById(produ.id).subscribe({
          next: (producto) => {
            if (producto.cantidad !== null && producto.cantidad !== undefined) {
              producto.cantidad += produ.cantidad ? produ.cantidad : 0;
            } else {
              producto.cantidad = produ.cantidad;
            }
            this.productoService.putProducto(producto).subscribe({
              next: (producto) => {
                console.log('Stock actualizado', producto);
                pedido.estado = 'Entregado';
                this.ts.putPedido(pedido).subscribe({
                  next: (pedido) => {
                    console.log('Pedido actualizado', pedido);
                    this.listarPedidosAceptados();
                  },
                  error: (err) => {
                    console.log('Error al actualizar pedido', err);
                  },
                });
              },
              error: (err) => {
                console.log('Error al acutalizar stock', err);
              },
            });
          },
          error: (err) => {
            console.log('Error no se encuentra producto', err);
          },
        });
      }
    });
  }
}