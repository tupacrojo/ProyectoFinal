import { Component } from '@angular/core';
import { Pedido } from '../../../interfaces/Pedido.interface';
import { PedidoService } from '../../../services/pedido.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-pedidos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-pedidos.component.html',
  styleUrl: './lista-pedidos.component.css'
})
export class ListaPedidosComponent {
  constructor(private listaPedidosService: PedidoService) {}
  listaPedidos: Pedido[] = [];


  ngOnInit(): void{ 
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


}
