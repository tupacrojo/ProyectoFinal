import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pedido } from '../../../interfaces/Pedido.interface';
import { PedidoService } from '../../../services/pedido.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supervisor',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './supervisor.component.html',
  styleUrl: './supervisor.component.css',
})
export class SupervisorComponent {
  constructor(private listaPedidosService: PedidoService) {}
  listaPedidos: Pedido[] = [];
  selects: boolean[] = [];
  modifyEstado: boolean[] = [];

  ngOnInit(): void {
    this.mostrarLista();
  }

  mostrarLista() {
    this.listaPedidosService.getListaPedidos().subscribe({
      next: (pedido) => {
        this.listaPedidos = pedido;
      },

      error: (err) => {
        console.log('Error', err);
      },
    });
  }

  modficarPedido(ped: Pedido) {
    this.listaPedidosService.putPedido(ped).subscribe({
      next: () => {
        console.log('Actualizado el estado correctamente');
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  valorEstado(valorEstado: string, index: number): boolean {
    if (valorEstado === 'En espera de confirmacion') return true;

    this.modificarEstado(index);
    return false;
  }

  modificarEstado(index: number) {
    this.modifyEstado[index] = true;
  }

  cambiarEstadoAceptacion(index: number) {
    this.listaPedidos[index].estado = 'En preparacion';

    this.modficarPedido(this.listaPedidos[index]);
  }

  cambiarEstadoRechazo(index: number) {
    this.listaPedidos[index].estado = 'Rechazado';

    this.modficarPedido(this.listaPedidos[index]);
  }

  habilitarSelect(index: number) {
    this.modifyEstado[index] = false;
    this.selects[index] = true;
  }
}
