import { Component } from '@angular/core';
import { NuevoPedidoComponent } from "../../componentes/pedidos/nuevo-pedido/nuevo-pedido.component";

@Component({
  selector: 'app-nuevo-pedido-page',
  standalone: true,
  imports: [NuevoPedidoComponent],
  templateUrl: './nuevo-pedido-page.component.html',
  styleUrl: './nuevo-pedido-page.component.css'
})
export class NuevoPedidoPageComponent {

}
