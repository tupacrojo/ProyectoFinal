import { Component, inject, OnInit } from '@angular/core';
import { Pedido } from '../../../interfaces/Pedido.interface';
import { PedidoService } from '../../../services/pedido.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cargar-remito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cargar-remito.component.html',
  styleUrl: './cargar-remito.component.css'
})
export class CargarRemitoComponent  implements OnInit{

  ngOnInit(): void {
    this.listarPedidosAceptados();
  }

  listaPedidosAceptados: Pedido[] = [];
  ts = inject(PedidoService);
  nuevaCantidad : number = 0;

  listarPedidosAceptados() {
    this.ts.getPedidosAceptados().subscribe({
      next: (pedidos) => {
        this.listaPedidosAceptados = pedidos;
      },
      error: (err) => {
        console.log('Error', err);
      }
    });
  }

  cargarProducto() {
   
  }

}

