import { Component } from '@angular/core';
import { Pedido } from '../../../interfaces/Pedido.interface';
import { PedidoService } from '../../../services/pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  standalone: true,
  imports: [],
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

  eliminarPedido(id: string | undefined) {
    this.listaPedidosService.deleteProductos(id).subscribe({
      next: (pedido: Pedido) => {
        this.listaPedidos = this.listaPedidos.filter(
          (pedido) => pedido.id !== id
        );
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }
}
