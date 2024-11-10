import { Component } from '@angular/core';
import { ListaPedidosComponent } from "../../componentes/pedidos/lista-pedidos/lista-pedidos.component";

@Component({
  selector: 'app-lista-pedidos-page',
  standalone: true,
  imports: [ListaPedidosComponent],
  templateUrl: './lista-pedidos-page.component.html',
  styleUrl: './lista-pedidos-page.component.css'
})
export class ListaPedidosPageComponent {

}
