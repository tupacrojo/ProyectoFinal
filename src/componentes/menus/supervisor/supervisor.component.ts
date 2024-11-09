import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaPedidosComponent } from "../../pedidos/lista-pedidos/lista-pedidos.component";
import { Pedido } from '../../../interfaces/Pedido.interface';
import { PedidoService } from '../../../services/pedido.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supervisor',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './supervisor.component.html',
  styleUrl: './supervisor.component.css'
})
export class SupervisorComponent {
  
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
