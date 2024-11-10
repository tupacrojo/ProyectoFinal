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

  cargarProducto(pedido: Pedido, pedidoIndex: number) {
    console.log(pedido);
  }
}
